import assert from "assert";

import { ONNXModel } from "../src/model";
import { CHANNELS, LOOP_DURATION, LOCAL_MODEL_DIR } from "../src/constants";
import { testPattern } from "./helpers";

describe("ONNXModel", function () {
  it("syncopate model is constructed correctly", async function () {
    const model = await ONNXModel.build("syncopate", LOCAL_MODEL_DIR);
    assert.ok(model.meta.latentSize == 2);
    assert.ok(model.meta.channels == CHANNELS);
    assert.ok(model.meta.loopDuration == LOOP_DURATION);
  });
  it("syncopate model properly runs forward function", async function () {
    // build model
    const model = await ONNXModel.build("syncopate", LOCAL_MODEL_DIR);

    // prepare input data
    const [onsets, velocities, offsets] = await testPattern();
    let pattern = onsets.concatenate(velocities, 2);
    pattern = pattern.concatenate(offsets, 2);

    // repeat and flatten
    const batchSize = 2;
    let repeat_pattern = pattern;
    for (let i = 1; i < batchSize; i++) {
      repeat_pattern = repeat_pattern.concatenate(pattern, 0);
    }
    const noteDropout = 0.5;
    
    const output = await model.forward(repeat_pattern, noteDropout);
    assert.ok(output.onsets.size == onsets.size*batchSize)

    // TODO: More tests on output shape and actual values
  });
  it("groove model is constructed correctly", async function () {
    const model = await ONNXModel.build("groove", LOCAL_MODEL_DIR);
    assert.ok(model.meta.latentSize == 32);
    assert.ok(model.meta.channels == CHANNELS);
    assert.ok((model.meta.loopDuration == LOOP_DURATION));
  });
  it("groove model properly runs forward function", async function () {
    // build model
    const model = await ONNXModel.build("groove", LOCAL_MODEL_DIR);

    // prepare input data
    const [onsets, velocities, offsets] = await testPattern();
    let pattern = onsets.concatenate(velocities, 2);
    pattern = pattern.concatenate(offsets, 2);

    // repeat and flatten
    const batchSize = 2;
    let repeat_pattern = pattern;
    for (let i = 1; i < batchSize; i++) {
      repeat_pattern = repeat_pattern.concatenate(pattern, 0);
    }
    const noteDropout = 0.5;
    
    const output = await model.forward(repeat_pattern, noteDropout);
    assert.ok(output.onsets.size == onsets.size*batchSize)

    // TODO: More tests on output shape and actual values
  });
});
