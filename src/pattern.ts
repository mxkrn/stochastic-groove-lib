import fs from 'fs';
import { Tensor } from 'onnxruntime';
const JZZ = require('jzz');
require('jzz-midi-smf')(JZZ);

import { LOOP_DURATION , CHANNELS, STEPS_PER_QUARTER, NOTE_THRESHOLD } from './constants';
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
    get pattern() {
        let p = this._onsets.concat(this._velocities);
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
            };
            for (let ch = 0; ch < channels; ch++) {
                output.push(this._velocities[ch][step]);
            };
            for (let ch = 0; ch < channels; ch++) {
                output.push(this._offsets[ch][step]);
            };
        }
        return Float32Array.from(output);
    }
    get onsets() {
        return this._onsets;
    }
    get velocities() {
        return this._velocities;
    }
    get offsets() {
        return this._offsets;
    }
    get onsetsBuffer() {
        return this._onsetsBuffer;
    }
    get velocitiesBuffer() {
        return this._velocitiesBuffer;
    }
    get offsetsBuffer() {
        return this._offsetsBuffer;
    }
    static async from_midi(
        filePath: string, 
        pitchMapping: Object): Promise<PatternBuffer> {
        /**
         * Construct the PatternBuffer class from a MIDI file
         * @filePath        Path to MIDI file
         * @pitchMapping    Object containing the channel pitch to index mapping
         */
        let onsets = initArray([CHANNELS, LOOP_DURATION]);
        let velocities = initArray([CHANNELS, LOOP_DURATION]);
        let offsets = initArray([CHANNELS, LOOP_DURATION]);

        let binary = fs.readFileSync(filePath, 'binary');
        const midiSMF = new JZZ.MIDI.SMF(binary);

        let promises = midiSMF.map((seq) => {
            for (let j = 0; j < seq.length; j++) {
                let event = seq[j];
                if (event['0'] == 144) {
                    let step = Math.round(event.tt / (STEPS_PER_QUARTER / 4));
                    let channel = pitchMapping[event['1'].toString()]

                    onsets[channel][step] = 1.;
                    let v = event['2'] / 127.;
                    velocities[channel][step] = v;
                    if (event['0']) {
                        let shift = signedMod(event.tt);
                        event.tt = event.tt - shift;
                    }
                    offsets[channel][step] = signedMod(event.tt) / 12.;
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
        let onsets = [];
        let velocities = [];
        let offsets = [];
        for (let i = 0; i < onsetsTensor.data.length; i++) {
            let value = onsetsTensor.data[i];
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
            let tmp = bufferArray.slice(i*this.sequenceLength, (i+1)*this.sequenceLength);
            pattern.push(tmp);
        }
        return pattern;
    }
    transpose(buffer: Float32Array, inverse=false): Float32Array {
        /**
         * Transpose elements in buffer between [this.sequenceLength, this.instruments]
         */
        let tBuffer = new Float32Array(buffer.length)
        Array.from(buffer).forEach((value, idx) => {
            if (inverse) {
                let rem = Math.floor(idx / this.sequenceLength)
                let idxt = ((idx%this.sequenceLength)*this.instruments) + rem
                tBuffer[idxt] = value;
            } else {
                let rem = Math.floor(idx / this.instruments)
                let idxT = ((idx%this.instruments)*this.sequenceLength) + rem
                tBuffer[idxT] = value;
            }
            
        })
        return tBuffer;
    }
}

export default PatternBuffer;