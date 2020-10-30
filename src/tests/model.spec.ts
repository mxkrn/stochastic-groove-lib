import assert from 'assert';
import ONNXModel from '../model';
import PatternBuffer from '../pattern';
import { DEFAULT_MODEL, NUM_DRUM_TRACKS, LOOP_DURATION } from '../constants';
import { getInput } from './fixtures.spec';


describe('ONNXModel', function() {
    it('builds and initializes methods and variables', async function() {
        let model = await ONNXModel.build(DEFAULT_MODEL, NUM_DRUM_TRACKS);
        assert.ok(model.instruments == NUM_DRUM_TRACKS);
        assert.ok(model.vocabSize = Math.pow(2, NUM_DRUM_TRACKS));
        assert.ok(model.sequenceLength = LOOP_DURATION);
    })
    it('properly runs forward function', async function() {
        let input = getInput();
        let tensor = new PatternBuffer(input);
        let model = await ONNXModel.build(DEFAULT_MODEL, NUM_DRUM_TRACKS);
        let indices = tensor.indices;
        let output = await model.decode(indices, [0., 0.], 0);
        assert.ok(tensor.indices.length == output.length);
    })
});
