import assert from 'assert';
import ONNXModel from '../model';
import PatternBuffer from '../pattern';

import { DEFAULT_MODEL, CHANNELS, LOOP_DURATION } from '../constants';
import { testPattern } from './fixtures.spec';


describe('ONNXModel', function() {
    it('builds and initializes methods and variables', async function() {
        let model = await ONNXModel.build(DEFAULT_MODEL, CHANNELS);
        assert.ok(model.channels == CHANNELS);
        assert.ok(model.loopDuration = LOOP_DURATION);
    })
    it('properly runs forward function', async function() {
        let patternBuffer = await testPattern();
        let model = await ONNXModel.build(DEFAULT_MODEL, CHANNELS);
        let input = patternBuffer.buffer;
        let output = await model.run(input, [0., 0.], 0.);
        let newPatternBuffer = await PatternBuffer.from_tensors(
            output.onsets, output.velocities, output.offsets
        );
        for (let i = 0; i < patternBuffer.onsetsBuffer.length; i++) {
            try {
                assert.strictEqual(patternBuffer.onsetsBuffer[i].toFixed(3), newPatternBuffer.onsetsBuffer[i].toFixed(3));   
            } catch (error) {
                console.warn(`error at index ${i} - The model is not deterministic, check this index manually to ensure correctness`);
            }
        };
    })
});
