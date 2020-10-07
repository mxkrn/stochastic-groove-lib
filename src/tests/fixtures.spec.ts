import { SEQUENCE_LENGTH, NUM_INSTRUMENTS } from '../generate/constants';

function getInput() {
    return Float32Array.from({ length: SEQUENCE_LENGTH*NUM_INSTRUMENTS}, (_, i) => 1);
}

function getRequestBody() {
    return {
        "pattern": getInput(),
        "numSamples": 400,
        "noteDropout": 0.5
    }

}
export { getInput, getRequestBody };