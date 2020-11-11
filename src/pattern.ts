import fs from 'fs';
import { Tensor } from 'onnxruntime';
const JZZ = require('jzz');
require('jzz-midi-smf')(JZZ);

import { LOOP_DURATION , CHANNELS, NOTE_THRESHOLD } from './constants';
import { signedMod, initArray } from './util';

class PatternBuffer {
    /**
     * This class exists to make the loading and processing of pattern data
     * easier. Mainly we're converting onsets, velocities, and offsets between
     * the following two formats:
     *          
     *      _buffer { length: SEQUENCE_LENGTH*NUM_INSTRUMENTS } 
     *          - Binary-encoding
     *          - Used to communicate with the client
     *      _pattern { length: [SEQUENCE_LENGTH, NUM_INSTRUMENTS]}
     *          - Binary-encoding
     *          - MIDI-compatible
     * 
     * We will use _buffer as the unifying data representation as it's the most
     * intuitive and is easily converted to the other two formats.
     */
    public sequenceLength: number;
    public instruments: number;
    private _onsets: Array<Array<number>>; 
    private _velocities: Array<Array<number>>; 
    private _offsets: Array<Array<number>>; 
    private _onsetsBuffer: Float32Array;
    private _velocitiesBuffer: Float32Array;
    private _offsetsBuffer: Float32Array;

    constructor(onsets, velocities, offsets, loopDuration: number = LOOP_DURATION, instruments: number = CHANNELS) {
        this.sequenceLength = loopDuration;
        this.instruments = instruments;

        if (onsets.length == this.sequenceLength*this.instruments) {
            this._onsetsBuffer = onsets;
            this._velocitiesBuffer = velocities;
            this._offsetsBuffer = offsets;

            this._onsets = this._to_pattern(onsets);
            this._velocities = this._to_pattern(velocities);
            this._offsets = this._to_pattern(offsets);

        } else if (onsets.length == this.instruments) {
            this._onsets = onsets;
            this._velocities = velocities;
            this._offsets = offsets;
            
            this._onsetsBuffer = this._to_buffer(onsets);
            this._velocitiesBuffer = this._to_buffer(velocities);
            this._offsetsBuffer = this._to_buffer(offsets);
        }
        else {
            throw new Error(`invalid input of length ${onsets.length}`);
        }
    }
    get pattern(): Array<Array<number>> {
        const p = this._onsets.concat(this._velocities);
        return p.concat(this._offsets);
    }
    get buffer(): Float32Array {
        /**
         * Return Float32Array buffer containing onsets, velocities, and offsets formatted as [32, 27].
         * We use this as input for the ONNX model.
         */
        const output = [];
        const length = this._onsets[0].length;
        const channels = this._onsets.length;
        for (let step = 0; step < length; step++) {
            for (let ch = 0; ch < channels; ch++) {
                output.push(this._onsets[ch][step]);
            }
            for (let ch = 0; ch < channels; ch++) {
                output.push(this._velocities[ch][step]);
            }
            for (let ch = 0; ch < channels; ch++) {
                output.push(this._offsets[ch][step]);
            }
        }
        return Float32Array.from(output);
    }
    get onsets(): Array<Array<number>> {
        return this._onsets;
    }
    get velocities(): Array<Array<number>> {
        return this._velocities;
    }
    get offsets(): Array<Array<number>> {
        return this._offsets;
    }
    get onsetsBuffer(): Float32Array {
        return this._onsetsBuffer;
    }
    get velocitiesBuffer(): Float32Array {
        return this._velocitiesBuffer;
    }
    get offsetsBuffer(): Float32Array {
        return this._offsetsBuffer;
    }
    static async from_midi(
        filePath: string, 
        pitchMapping: Record<string, number>): Promise<PatternBuffer> {
        /**
         * Construct the PatternBuffer class from a MIDI file
         * @filePath        Path to MIDI file
         * @pitchMapping    Object containing the channel pitch to index mapping
         */
        const onsets = initArray([CHANNELS, LOOP_DURATION]);
        const velocities = initArray([CHANNELS, LOOP_DURATION]);
        const offsets = initArray([CHANNELS, LOOP_DURATION]);

        const binary = fs.readFileSync(filePath, 'binary');
        const midiSMF = new JZZ.MIDI.SMF(binary);
        const stepsPerQuarter = midiSMF.ppqn;

        const promises = midiSMF.map((seq) => {
            for (let j = 0; j < seq.length; j++) {
                const event = seq[j];
                if (event['0'] == 144) {
                    const step = Math.round(event.tt / (stepsPerQuarter / 4));
                    const channel = pitchMapping[event['1'].toString()]
                    
                    if (step >= LOOP_DURATION) {
                        // Limit pattern length to LOOP_DURATION
                        break;
                    };
                    onsets[channel][step] = 1.;
                    const v = event['2'] / 127.;
                    velocities[channel][step] = v;
                    const shift = signedMod(event.tt, stepsPerQuarter / 4.);
                    offsets[channel][step] = shift / stepsPerQuarter / 8;
                }
            }
        });
        await Promise.all(promises);
        return new PatternBuffer(onsets, velocities, offsets);
    }
    static async from_tensors(
        onsetsTensor: Tensor, 
        velocitiesTensor: Tensor, 
        offsetsTensor: Tensor): Promise<PatternBuffer> {
        /**
         * Cannot use Array.from(Float32Array) for some reason (number !-> bigint)
         */
        const onsets = [];
        const velocities = [];
        const offsets = [];
        for (let i = 0; i < onsetsTensor.data.length; i++) {
            const value = onsetsTensor.data[i];
            if (value > NOTE_THRESHOLD) {
                onsets.push(1.);
                velocities.push(Number(velocitiesTensor.data[i]));
                offsets.push(Number(offsetsTensor.data[i]));
            } else {
                onsets.push(0.);
                velocities.push(0.);
                offsets.push(0.);
            }
        }
        return new PatternBuffer(
            Float32Array.from(onsets), 
            Float32Array.from(velocities), 
            Float32Array.from(offsets)
        );
    }
    private _to_buffer(pattern: Array<Array<number>>): Float32Array {
        /**
         * Convert from pattern to buffer array
         */
        const buffer = new Float32Array(this.sequenceLength*this.instruments);
        pattern.forEach((channel, i) => {
            for (let step = 0; step < channel.length; step++) {
                buffer[(i*channel.length) + step] = channel[step];
            }
        });
        return this.transpose(buffer, true);
    }
    private _to_pattern(buffer: Float32Array): Array<Array<number>> {
        /**
         * Convert from buffer to pattern array
         */
        const bufferArray = Array.from(this.transpose(buffer, false))
        const pattern = [];
        for (let i = 0; i < this.instruments; i++) {
            const tmp = bufferArray.slice(i*this.sequenceLength, (i+1)*this.sequenceLength);
            pattern.push(tmp);
        }
        return pattern;
    }
    transpose(buffer: Float32Array, inverse=false): Float32Array {
        /**
         * Transpose elements in buffer between [this.sequenceLength, this.instruments]
         */
        const tBuffer = new Float32Array(buffer.length)
        Array.from(buffer).forEach((value, idx) => {
            if (inverse) {
                const rem = Math.floor(idx / this.sequenceLength)
                const idxt = ((idx%this.sequenceLength)*this.instruments) + rem
                tBuffer[idxt] = value;
            } else {
                const rem = Math.floor(idx / this.instruments)
                const idxT = ((idx%this.instruments)*this.sequenceLength) + rem
                tBuffer[idxT] = value;
            }
            
        })
        return tBuffer;
    }
}

export default PatternBuffer;