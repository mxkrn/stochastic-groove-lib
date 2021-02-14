import assert from "assert"
import { performance } from "perf_hooks";
import { NOTE_DROPOUT, NUM_SAMPLES } from "../src/constants";

import Generator from "../src/generate";
import { testPattern } from "./helpers";


describe("Generator", function () {
  it("builds and initializes methods and variables", async function () {
    const [onsetsPattern, velocitiesPattern, offsetsPattern] = await testPattern();
    const stbuild = performance.now();

    const generator = await Generator.build(
      onsetsPattern.data,
      velocitiesPattern.data,
      offsetsPattern.data,
      NUM_SAMPLES,
      NOTE_DROPOUT
    );
    console.log("build time:", performance.now() - stbuild);
    const st = performance.now();
    await generator.run();
    console.log("time to populate:", performance.now() - st);
    const onsets = generator.onsets;
    assert.strictEqual(onsets.size, generator.numSamples);
    for (let i = 0; i < onsets.length; i++) {
        for (let j = 0; j < onsets.length; j++) {
            assert.strictEqual(onsets.sample(i, j).length, onsetsPattern.data.length)
        }
    }
  });
});
