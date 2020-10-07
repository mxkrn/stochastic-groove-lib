import assert from 'assert';
import ONNXModel from '../generate/model';
import ConverterTensor from '../generate/tensor';
import { DEFAULT_MODEL, NUM_INSTRUMENTS, SEQUENCE_LENGTH } from '../generate/constants';
import { getInput } from './fixtures.spec';


describe('ONNXModel', function() {
    it('builds and initializes methods and variables', async function() {
        let model = await ONNXModel.build(DEFAULT_MODEL, NUM_INSTRUMENTS);
        assert.ok(model.instruments == NUM_INSTRUMENTS);
        assert.ok(model.vocabSize = Math.pow(2, NUM_INSTRUMENTS));
        assert.ok(model.sequenceLength = SEQUENCE_LENGTH);
    })
    it('properly runs forward function', async function() {
        let input = getInput();
        let tensor = new ConverterTensor(input);
        let model = await ONNXModel.build(DEFAULT_MODEL, NUM_INSTRUMENTS);
        let indices = tensor.indices;
        let output = await model.decode(indices, [0., 0.], 0);
        assert.ok(tensor.indices.length == output.length);
    })
});
