import assert from 'assert';

import ConverterTensor, { converterMap } from '../generate/tensor';
import { NUM_INSTRUMENTS, SEQUENCE_LENGTH } from '../generate/constants';
import { getInput } from './fixtures.spec';

let buffer_input = getInput();
let tensor = new ConverterTensor(buffer_input);

describe('ConverterTensor', function() {
    it('should generate correct index to sequence mapping schemes', function() {
        
        let idx2seq = converterMap(NUM_INSTRUMENTS, true);
        let seq2idx = converterMap(NUM_INSTRUMENTS, false);
        let indexArray = Object.keys(idx2seq)
        let seqArray = Object.keys(seq2idx);
        let sample = Array.from({ length: NUM_INSTRUMENTS }, _ => 0).toString();
        assert.ok(indexArray[0] == "0");
        assert.ok(seqArray[0] == sample);
        assert.ok(indexArray.length == Math.pow(2, NUM_INSTRUMENTS))
        assert.ok(seqArray.length == Math.pow(2, NUM_INSTRUMENTS))
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
        assert.ok(indices.length == SEQUENCE_LENGTH)
        let new_tensor = new ConverterTensor(indices);
        let newBuffer = JSON.stringify(new_tensor.buffer);
        let original = JSON.stringify(buffer_input);
        assert.ok(original == newBuffer);
        let pattern = JSON.stringify(tensor.pattern);
        let newPattern = JSON.stringify(new_tensor.pattern);
        assert.ok(pattern == newPattern);
    })
    it('converts buffer to pattern and vice versa', function() {
        let pattern = tensor.pattern;
        assert.ok(pattern.length == NUM_INSTRUMENTS);
        assert.ok(pattern[0].length == SEQUENCE_LENGTH);
        let new_tensor = new ConverterTensor(pattern);
        assert.ok(buffer_input = new_tensor.indices);
        assert.ok(pattern == new_tensor.pattern);
        let buffer = tensor.buffer;
        let newBuffer = new_tensor.buffer;
        assert.ok(JSON.stringify(buffer) == JSON.stringify(newBuffer));
    })
})