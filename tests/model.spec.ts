import assert from "assert";

import ONNXModel from "../src/model";
import { CHANNELS, LOOP_DURATION } from "../src/constants";
import { testPattern } from "./helpers";

describe("ONNXModel", function () {
  it("is constructed correctly", async function () {
    const model = await ONNXModel.build();
    assert.ok(model.channels == CHANNELS);
    assert.ok((model.loopDuration == LOOP_DURATION));
  });
  it("properly runs forward function", async function () {
    // build model
    const model = await ONNXModel.build();

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
