import assert from 'assert';
import fs from 'fs';

import { converterMap } from '../util';
import PatternBuffer from '../pattern';
import { NUM_DRUM_TRACKS, LOOP_DURATION } from '../constants';
import { getInput } from './fixtures.spec';

let buffer_input = getInput();
let tensor = new PatternBuffer(buffer_input);

describe('ConverterTensor', function() {
    it('should generate correct index to sequence mapping schemes', function() {
        
        let idx2seq = converterMap(NUM_DRUM_TRACKS, true);
        let seq2idx = converterMap(NUM_DRUM_TRACKS, false);
        let indexArray = Object.keys(idx2seq)
        let seqArray = Object.keys(seq2idx);
        let sample = Array.from({ length: NUM_DRUM_TRACKS }, _ => 0).toString();
        assert.ok(indexArray[0] == "0");
        assert.ok(seqArray[0] == sample);
        assert.ok(indexArray.length == Math.pow(2, NUM_DRUM_TRACKS))
        assert.ok(seqArray.length == Math.pow(2, NUM_DRUM_TRACKS))
        assert.ok(tensor.buffer == buffer_input);
    })
    it('should transpose a buffer', function() {
        let in_buffer = tensor.buffer;
        let out_buffer = tensor._transpose(in_buffer, false);
        let in2_buffer = tensor._transpose(out_buffer, true);
        assert.ok(JSON.stringify(in2_buffer) == JSON.stringify(in_buffer));
    })
    it('converts indices to buffer and vice versa', function() {
        let indices = tensor.indices;
        assert.ok(indices.length == LOOP_DURATION)
        let new_tensor = new PatternBuffer(indices);
        let newBuffer = JSON.stringify(new_tensor.buffer);
        let original = JSON.stringify(buffer_input);
        assert.ok(original == newBuffer);
        let pattern = JSON.stringify(tensor.pattern);
        let newPattern = JSON.stringify(new_tensor.pattern);
        assert.ok(pattern == newPattern);
    })
    it('converts buffer to pattern and vice versa', function() {
        let pattern = tensor.pattern;
        assert.ok(pattern.length == NUM_DRUM_TRACKS);
        assert.ok(pattern[0].length == LOOP_DURATION);
        let new_tensor = new PatternBuffer(pattern);
        assert.ok(buffer_input = new_tensor.indices);
        assert.ok(pattern == new_tensor.pattern);
        let buffer = tensor.buffer;
        let newBuffer = new_tensor.buffer;
        assert.ok(JSON.stringify(buffer) == JSON.stringify(newBuffer));
    })
    it('loads from midi', async function() {
        let fileName = 'src/tests/data/funkydrummer.mid';
        let midiBuffer = fs.readFileSync(fileName, 'binary');
        let data = fs.readFileSync(process.cwd() + '/assets/drum_pitch_classes.json', 'utf-8');
        let pitchMapping = JSON.parse(data);
        let patternBuffer = await PatternBuffer.from_midi(midiBuffer, pitchMapping['index']);
        let buffer = patternBuffer.buffer;
        let pattern = patternBuffer.pattern;
    })
})