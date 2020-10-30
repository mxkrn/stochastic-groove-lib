import { LOOP_DURATION, NUM_DRUM_TRACKS } from '../constants';

function getInput() {
    return Float32Array.from({ length: LOOP_DURATION*NUM_DRUM_TRACKS}, (_, i) => 1);
}

function getRequestBody() {
    return {
        "pattern": getInput(),
        "numSamples": 400,
        "noteDropout": 0.5
    }

}
export { getInput, getRequestBody };