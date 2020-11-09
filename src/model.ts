import { InferenceSession, Tensor } from 'onnxruntime';

import { DEFAULT_MODEL, LOOP_DURATION, CHANNELS } from './constants';


class ONNXModel {
    /**
     * Wraps ONNX model for stateful inference sessions
     */
    session: InferenceSession;
    channels: number;
    loopDuration: number;
    
    constructor(
        session: InferenceSession, 
        instruments: number) {
        if (typeof session === 'undefined') {
            throw new Error('cannot be called directly - use await Model.build(pattern) instead')
        }
        this.session = session;
        this.channels = instruments;
        this.loopDuration = LOOP_DURATION;  // HARD-CODED SEQUENCE LENGTH TO 2 BARS
    }

    static async build(
        fpath: string = DEFAULT_MODEL, 
        channels: number = CHANNELS): Promise<ONNXModel> {
        /**
         * @fpath   Path to ONNX model
         */  
        try {
            const session = await InferenceSession.create(fpath);
            return new ONNXModel(session, channels);
        } catch(e) {
            throw new Error(`failed to load ONNX model: ${e}`);
        }
    }
    async run(
        input: Float32Array, 
        deltaZ: Array<number> = [0., 0.], 
        noteDropout: number = 0.5) {
        /**
         * Forward pass of ONNX model.
         * 
         * @input       PatternBuffer.buffer containing input data
         * @deltaZ      Delta from origin in z-space for both dimensions (currently only support 2D)
         * @noteDropout Probability of note dropout when generating new pattern
         * 
         * @returns output indices
         */
        
        let tensor = new Tensor('float32', input, [1, 32, 27]);
        let deltaZTensor = new Tensor('float32', deltaZ, [2, ]);
        let noteDropoutTensor = new Tensor('float32', [noteDropout], [1, ])
        const feeds = { input: tensor, delta_z: deltaZTensor, note_dropout: noteDropoutTensor};
        const output = await this.session.run(feeds);
        return output;
    }
}

export default ONNXModel;
