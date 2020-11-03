import ONNXModel from './model';
import PatternBuffer from './pattern';
import { LOOP_DURATION, NUM_DRUM_TRACKS } from './constants';


class Generator {
    /**
     * This class wraps our loaded ONNX model and decodes based on incoming request data
     * @param model Instance of ONNXModel
     * @param requestbody.instruments Number of instruments in the pattern
     * @param requestbody.noteDropout Probability ([0, 1]) of note dropout for inference
     * @param requestBody.data Object containing z-coordinate to pattern mapping
     * @param converterTensor Instance of ConverterTensor
     */
    model: ONNXModel;
    model_path: string;
    instruments: number;
    sequenceLength: number;
    numSamples: number;
    noteDropout: number;
    converterTensor: PatternBuffer;
    latentVectors: Array<string>;
    _data: Object;
    
    constructor(
        model: ONNXModel, 
        pattern: Float32Array, 
        numSamples: number, 
        noteDropout: number, 
        instruments: number, 
        sequenceLength: number) {

        if (typeof model == "undefined") {
            throw new Error('cannot directly access class constructor - use Generator.build(<params>) instead.');
        }
        this.model = model;
        this.instruments = instruments;
        this.sequenceLength = sequenceLength;
        this.numSamples = numSamples;
        this.noteDropout = noteDropout;
        this.latentVectors = this._generateLatentVectors(numSamples);
        this.converterTensor = new PatternBuffer(pattern);
        this._data = {};
    }
    get data() {
        return this._data;
    }
    get pattern() {
        return this.converterTensor.pattern;
    }
    static async build(
        pattern: Float32Array, 
        numSamples: number = 400,
        noteDropout: number = 0.5, 
        instruments: number = NUM_DRUM_TRACKS,
        sequenceLength: number = LOOP_DURATION): Promise<Generator> {
        try {
            let model = await ONNXModel.build();
            return new Generator(model, pattern, numSamples, noteDropout, instruments, sequenceLength);
        } catch(e) {
            console.error('failed to load LatentSpace');
            throw new Error(e);
        }
        
    }
    async populate() {
        /**
         * Populates this.data by decoding the latent coordinates array this.zs in parallel
         */
        const data = this._data;
        const inputTensor = this.converterTensor;
        const model = this.model;
        const noteDropout = this.noteDropout;

        let promises = this.latentVectors.map(async(z) => {
            let delta_z = z.split(',').map((z_i) => { return parseFloat(z_i) });
            let output = await model.decode(inputTensor.indices, delta_z, noteDropout);
            let outputTensor = new PatternBuffer(output);
            data[z] = outputTensor.buffer;
        });
        await Promise.all(promises);
        this._data = data;
        
    }
    private _generateLatentVectors(numSamples) {
        let n = Math.round((Math.sqrt(numSamples))/2);
        const latentVectors = [];
        for (let x = -n; x < n; x++) {
            for (let y = -n; y < n; y++) {
                let idx = new Array([x, y]);
                latentVectors.push(idx.toString());
            }
        }
        return latentVectors;
    }
}

export default Generator;