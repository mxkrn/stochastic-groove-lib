import { InferenceSession, Tensor } from 'onnxruntime';

import { DEFAULT_MODEL, SEQUENCE_LENGTH } from './constants';


class ONNXModel {
    /**
     * Contains ONNX model and inference functions
     */
    session: InferenceSession;
    instruments: number;
    vocabSize: number;
    sequenceLength: number;
    idx2seq: object;
    
    constructor(
        session: InferenceSession, 
        instruments: number = 9) {
        if (typeof session === 'undefined') {
            throw new Error('cannot be called directly - use await Model.build(pattern) instead')
        }
        this.session = session;
        this.instruments = instruments;
        this.vocabSize = Math.pow(2, instruments);
        this.sequenceLength = SEQUENCE_LENGTH;  // HARD-CODED SEQUENCE LENGTH TO 2 BARS
    }

    static async build(
        fpath: string = DEFAULT_MODEL, 
        instruments: number): Promise<ONNXModel> {
        /**
         * @param {*} fpath Path to ONNX model, default is FPATH
         */  
        try {
            const session = await InferenceSession.create(fpath);
            return new ONNXModel(session, instruments);
        } catch(e) {
            throw new Error(`failed to load ONNX model: ${e}`);
        }
    }

    async decode(
        indices: Float32Array, 
        deltaZ: Array<number> = [0., 0.], 
        noteDropout: number = 0.5): Promise<Float32Array> {
        /**
         * Forward pass of ONNX model decoder - generates pattern variation.
         * 
         * @param {*} indices  (length=32) containing sequence indices
         * @param {*} deltaZ Delta from origin in z-space for both dimensions (currently only support 2D)
         * @param {*} noteDropout Probability of note dropout when generating new pattern
         * 
         * @returns output indices
         */
        
        const tensor = new Tensor('float32', indices, [32, 1]);
        const deltaZTensor = new Tensor('float32', deltaZ, [2, 1]);
        const noteDropoutTensor = new Tensor(new Float32Array(1), []);
        noteDropoutTensor.data[0] = noteDropout;
        const feeds = { input: tensor, delta_z: deltaZTensor, note_dropout: noteDropoutTensor};
        const results = await this.session.run(feeds);
        let output = this.fromOneHot(results.output.data);
        return output;
    }

    fromOneHot(tensor): Float32Array {
        let indices = [];
        for (let i = 0; i < this.sequenceLength; i++) {
            let tmp = tensor.slice(i*this.vocabSize, (i+1)*this.vocabSize)
            let idx = tmp.indexOf(Math.max(...tmp));
            indices.push(idx)
        }
        return Float32Array.from(indices)
    }
}

export default ONNXModel;
