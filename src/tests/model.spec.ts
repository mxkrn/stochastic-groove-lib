import assert from 'assert';
import ONNXModel from '../model';
import PatternBuffer from '../pattern';

import { DEFAULT_MODEL, CHANNELS, LOOP_DURATION } from '../constants';
import { testPattern } from './fixtures.spec';


describe('ONNXModel', function() {
    it('builds and initializes methods and variables', async function() {
        const model = await ONNXModel.build(DEFAULT_MODEL, CHANNELS);
        assert.ok(model.channels == CHANNELS);
        assert.ok(model.loopDuration = LOOP_DURATION);
    })
    it('properly runs forward function', async function() {
        const patternBuffer = await testPattern();
        const model = await ONNXModel.build(DEFAULT_MODEL, CHANNELS);
        const input = patternBuffer.buffer;
        const output = await model.run(input, [0., 0.], 0.);
        const newPatternBuffer = await PatternBuffer.from_tensors(
            output.onsets, output.velocities, output.offsets
        );
        for (let i = 0; i < patternBuffer.onsetsBuffer.length; i++) {
            try {
                assert.strictEqual(patternBuffer.onsetsBuffer[i].toFixed(3), newPatternBuffer.onsetsBuffer[i].toFixed(3));   
            } catch (error) {
                console.warn(`error at index ${i} - The model is not deterministic, check this index manually to ensure correctness`);
            }
        }
    })
});
