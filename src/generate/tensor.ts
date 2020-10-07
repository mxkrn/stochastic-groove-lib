import { SEQUENCE_LENGTH , NUM_INSTRUMENTS } from './constants';

class ConverterTensor {
    /**
     * This class exists to convert between three ways to represent our data:
     *          
     *      _buffer { length: SEQUENCE_LENGTH*NUM_INSTRUMENTS } 
     *          - Binary-encoding
     *          - Used to communicate with the client
     *      _pattern { length: [SEQUENCE_LENGTH, NUM_INSTRUMENTS]}
     *          - Binary-encoding
     *          - MIDI-compatible
     *      _indices { length: SEQUENCE_LENGTH }
     *          - Categorically encoded by index 
     *          - Serves as input and output of the ONNX model
     * 
     * We will use _buffer as the unifying data representation as it's the most
     * intuitive and is easily converted to the other two formats.
     */
    public sequenceLength: number;
    public instruments: number;
    private _pattern: Array<Array<number>>; 
    private _buffer: Float32Array;
    private _indices: Float32Array;

    constructor(input, sequenceLength: number = SEQUENCE_LENGTH, instruments: number = NUM_INSTRUMENTS) {
        this.sequenceLength = sequenceLength;
        this.instruments = instruments;
        if (input.length == this.sequenceLength) {
            this._indices = input;
            this._buffer = this._from_indices(input);
            this._pattern = this._to_pattern(this._buffer);
        } else if (input.length == this.sequenceLength*this.instruments) {
            this._buffer = input;
            this._indices = this._to_indices(input);
            this._pattern = this._to_pattern(this._buffer);
        } else if (input.length == this.instruments) {
            this._pattern = input;
            this._buffer = this._from_pattern(input);
            this._indices = this._to_indices(this._buffer)
        }
        else {
            throw new Error(`invalid input of length ${input.length}`)
        }
    }
    get pattern() {
        return this._pattern;
    }
    get buffer() {
        return this._buffer;
    }
    get indices() {
        return this._indices;
    }
    _from_pattern(pattern: Array<Array<number>>): Float32Array {
        /**
         * Convert from pattern to buffer array
         */
        const buffer = new Float32Array(this.sequenceLength*this.instruments);
        pattern.forEach((channel, i) => {
            for (let step = 0; step < channel.length; step++) {
                buffer[(i*channel.length) + step] = channel[step];
            }
        });
        return this._transpose(buffer, true);
    }
    _to_pattern(buffer: Float32Array): Array<Array<number>> {
        /**
         * Convert from buffer to pattern array
         */
        const bufferArray = Array.from(this._transpose(buffer, false))
        const pattern = [];
        for (let i = 0; i < this.instruments; i++) {
            let tmp = bufferArray.slice(i*this.sequenceLength, (i+1)*this.sequenceLength);
            pattern.push(tmp);
        }
        return pattern;
    }
    _from_indices(indices: Float32Array): Float32Array {
        /**
         * Convert from index to buffer array
         */
        let map = converterMap(this.instruments, true);
        let pattern = new Float32Array(this.sequenceLength*this.instruments);
        let indexArray = Array.from(indices);
        indexArray.forEach((idx: number, step: number) => {
            let p = Array.from(map[idx]);
            p.forEach((value: number, instrument: number) => {
                let loc = step*this.instruments + instrument;
                pattern[loc] = value;
            })
        })
        return pattern;
    }
    _to_indices(buffer: Float32Array): Float32Array {
        /**
         * Convert from buffer to index array
         */
        let map = converterMap(this.instruments, false);
        let indices = new Float32Array(this.sequenceLength);
        for (let i = 0; i < this.sequenceLength; i++) {
            let startIndex = i*this.instruments;
            let tmp = buffer.slice(startIndex, startIndex + this.instruments);
            let idx = map[tmp.toString()]
            indices[i] = idx;
        }
        return indices;
    }
    _transpose(buffer: Float32Array, inverse=false): Float32Array {
        /**
         * Transpose elements in matrix between [this.sequenceLength, this.instruments]
         */
        let bufferTransposed = new Float32Array(buffer.length)
        Array.from(buffer).forEach((value, idx) => {
            if (inverse) {
                let rem = Math.floor(idx / this.sequenceLength)
                let idxT = ((idx%this.sequenceLength)*this.instruments) + rem
                bufferTransposed[idxT] = value;
            } else {
                let rem = Math.floor(idx / this.instruments)
                let idxT = ((idx%this.instruments)*this.sequenceLength) + rem
                bufferTransposed[idxT] = value;
            }
            
        })
        return bufferTransposed;
    }
}

export default ConverterTensor;

/**
 * ========================
 * Utility functions
 * ========================
 */
function converterMap(n: number, inverse: boolean): object {
    /**
     * Generate all binary permutations of pattern length n
     * 
     *      n = 2 -> ['00', '01', '10', '11']
     * 
     * @param {*} n pattern length
     */
    const patterns = {}

    let vocab_size = Math.pow(2, n);
    for (let i = 0; i < vocab_size; i++) {
        const s = bin(i)
        let out = "";
        for (let j = 0; j < (n - s.length); j++) {
            out += "0";
        }
        out += s;
        let tensor = string_to_tensor(out);
        if (inverse) {
            patterns[i] = tensor;
        } else {
            patterns[tensor.toString()] = i;
        }
    }
    return patterns;
}
export { converterMap };

function bin(n: number): string {
    /**
     * Convert decimal to binary
     */
    if (n < 0) {
        n = 0xFFFFFFFF + n + 1;
    } 
    return parseInt(n.toString(), 10).toString(2);
}  

function string_to_tensor(s: string) {
    /**
     * Convert string to Array
     */
    let tensor = [];
    for (let i = 0; i < s.length; i++) {
        tensor.push(parseFloat(s[i]));
    }
    return tensor;
}