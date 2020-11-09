import assert from 'assert';

import PatternBuffer from '../pattern';
import { CHANNELS, LOOP_DURATION } from '../constants';
import { testPattern } from './fixtures.spec';


describe('PatternBuffer', function() {
    it('loads from midi', async function() {
        const patternBuffer = await testPattern();

        // check shapes
        const onsetsBuffer = patternBuffer.onsetsBuffer;
        const onsets = patternBuffer.onsets;
        assert.ok(onsets.length == CHANNELS);
        assert.ok(onsets[0].length == LOOP_DURATION);
        assert.ok(onsetsBuffer.length == CHANNELS*LOOP_DURATION);
        
        const velocitiesBuffer = patternBuffer.onsetsBuffer;
        const velocities = patternBuffer.velocities;
        assert.ok(velocities.length == CHANNELS);
        assert.ok(velocities[0].length == LOOP_DURATION);
        assert.ok(velocitiesBuffer.length == CHANNELS*LOOP_DURATION);

        const offsetsBuffer = patternBuffer.offsetsBuffer;
        const offsets = patternBuffer.offsets;
        assert.ok(offsets.length == CHANNELS);
        assert.ok(offsets[0].length == LOOP_DURATION);
        assert.ok(offsetsBuffer.length == CHANNELS*LOOP_DURATION);

        const isBinary = (v: number) => (v == 1.0 || v == 0.0);
        const velocityInRange = (v: number) => (v <= 1.0 && v >= 0.0);
        const offsetsInRange = (v: number) => (v <= 1.0 && v >= -1.0);
        for (let i = 0; i < offsets.length; i++) {
            assert.ok(offsets[i].every(offsetsInRange), 'offset values not in range [-1, 1]');
            assert.ok(onsets[i].every(isBinary), 'onset values not in range [0, 1]');
            assert.ok(velocities[i].every(velocityInRange), 'velocity values not in range [0, 1]');
        }
    })
    it('transposes buffer correctly', async function() {
        const patternBuffer = await testPattern();

        let in_buffer = patternBuffer.onsetsBuffer;
        let out_buffer = patternBuffer.transpose(in_buffer, false);
        let in2_buffer = patternBuffer.transpose(out_buffer, true);
        assert.ok(JSON.stringify(in2_buffer) == JSON.stringify(in_buffer), 'something went wrong with transposing the onsets buffer');
        assert.notStrictEqual(in_buffer, out_buffer);

        in_buffer = patternBuffer.velocitiesBuffer;
        out_buffer = patternBuffer.transpose(in_buffer, false);
        in2_buffer = patternBuffer.transpose(out_buffer, true);
        assert.ok(JSON.stringify(in2_buffer) == JSON.stringify(in_buffer), 'something went wrong with transposing the velocities buffer');
        assert.notStrictEqual(in_buffer, out_buffer);

        in_buffer = patternBuffer.offsetsBuffer;
        out_buffer = patternBuffer.transpose(in_buffer, false);
        in2_buffer = patternBuffer.transpose(out_buffer, true);
        assert.ok(JSON.stringify(in2_buffer) == JSON.stringify(in_buffer), 'something went wrong with transposing the offsets buffer');
        assert.notStrictEqual(in_buffer, out_buffer);
    })
    it('converts buffer to pattern and vice versa', async function() {
        const patternBuffer = await testPattern();

        const onsets = patternBuffer.onsets;
        const velocities = patternBuffer.velocities;
        const offsets = patternBuffer.offsets;

        let newPatternBuffer = new PatternBuffer(onsets, velocities, offsets);
        assert.ok(JSON.stringify(patternBuffer.onsetsBuffer) == JSON.stringify(newPatternBuffer.onsetsBuffer));
        assert.ok(JSON.stringify(patternBuffer.velocitiesBuffer) == JSON.stringify(newPatternBuffer.velocitiesBuffer));
        assert.ok(JSON.stringify(patternBuffer.offsetsBuffer) == JSON.stringify(newPatternBuffer.offsetsBuffer));

        const onsetsBuffer = patternBuffer.onsetsBuffer;
        const velocitiesBuffer = patternBuffer.velocitiesBuffer;
        const offsetsBuffer = patternBuffer.offsetsBuffer;
        newPatternBuffer = new PatternBuffer(onsetsBuffer, velocitiesBuffer, offsetsBuffer);

        const roundedEqual = (v1: number, v2: number) => (v1.toFixed(3) == v2.toFixed(3));
        for (let i = 0; i < patternBuffer.onsets.length; i++) {
            for (let j = 0; j < patternBuffer.onsets[0].length; j++) {
                assert.ok(roundedEqual(patternBuffer.onsets[i][j], newPatternBuffer.onsets[i][j]));
                assert.ok(roundedEqual(patternBuffer.velocities[i][j], newPatternBuffer.velocities[i][j]));
                assert.ok(roundedEqual(patternBuffer.offsets[i][j], newPatternBuffer.offsets[i][j]));
            }
        }
    })
    it('gets correctly formatted buffer', async function() {
        const patternBuffer = await testPattern();

        const buffer = patternBuffer.buffer;
        const step = 4;
        const onsetsBuffer = Array.from(patternBuffer.onsetsBuffer.slice(CHANNELS*step, CHANNELS*(step+1)));
        const velocitiesBuffer = Array.from(patternBuffer.velocitiesBuffer.slice(CHANNELS*step, CHANNELS*(step+1)));
        const offsetsBuffer = Array.from(patternBuffer.offsetsBuffer.slice(CHANNELS*step, CHANNELS*(step+1)));
        
        const testBuffer1 = onsetsBuffer.concat(velocitiesBuffer).concat(offsetsBuffer);
        const testBuffer2 = Array.from(buffer.slice(CHANNELS*3*step, CHANNELS*3*(step+1)))
        for (let i = 0; i < testBuffer2.length; i++) {
            assert.strictEqual(testBuffer1[i].toFixed(3), testBuffer2[i].toFixed(3));
        }
    })
})