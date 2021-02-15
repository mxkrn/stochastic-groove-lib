import assert from "assert"
import { performance } from "perf_hooks";
import { CHANNELS, LOOP_DURATION, NOTE_DROPOUT, NUM_SAMPLES } from "../src/constants";

import { PatternSizeError } from "../src/pattern"
import { PatternDataMatrix } from "../src/generate"
import Generator from "../src/generate";
import { testPattern, arraysEqual } from "./helpers"

describe("PatternDataMatrix", function() {

  const expectedShape: [number, number, number] = [1, LOOP_DURATION, CHANNELS]
  let length = 10
  const dataMatrix = new PatternDataMatrix(expectedShape, length)
  const pattern = Float32Array.from({ length: expectedShape[1] * expectedShape[2] }, _ => {
    return 1
  })

  it("constructed properly", function() {
    
    assert.strictEqual(dataMatrix.length, length)
    assert.strictEqual(dataMatrix.matrixSize, length ** 2)
    assert.strictEqual(dataMatrix.outputShape, expectedShape)
    assert.strictEqual(dataMatrix.outputSize, expectedShape[1] * expectedShape[2])

    length = 20
    dataMatrix.length = length
    assert.strictEqual(dataMatrix.length, length)

    const emptyDataMatrix = dataMatrix.empty()
    assert.strictEqual(emptyDataMatrix.length, length)
    assert.strictEqual(emptyDataMatrix[0].length, length)
    assert.strictEqual(emptyDataMatrix[0][0].length, LOOP_DURATION * CHANNELS)
    arraysEqual(Array.from(emptyDataMatrix[0][0]), Array.from({ length: LOOP_DURATION * CHANNELS }, _ => 0.))
  }),
  it("appends correct patterns", function() {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        dataMatrix.append(pattern, i, j)
        const gotPattern = dataMatrix.sample(i, j)
        arraysEqual(Array.from(gotPattern), Array.from(pattern))
      }
    } 
  }),
  it("rejects out of bounds append indices", function() {
    let i = length + 1
    let j = 0
    dataMatrix.append(pattern, i, j)
  }),
  it("throws patternSizeError", function() {
    let i = 1
    let j = 1
    const invalidLength = expectedShape[1] * expectedShape[2] + 1
    const invalidPattern = Float32Array.from({ length: invalidLength }, _ => {
      return 1
    })
    assert.throws(function() {dataMatrix.append(invalidPattern, i, j)}, PatternSizeError)
  }),
  it("fails when indexing out of bounds", function() {
    let i = length + 1
    let j = 1
    assert.throws(function() {dataMatrix.sample(i, j)}, TypeError)
  })
})

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
    assert.strictEqual(onsets.matrixSize, generator.numSamples);
    for (let i = 0; i < onsets.length; i++) {
        for (let j = 0; j < onsets.length; j++) {
            assert.strictEqual(onsets.sample(i, j).length, onsetsPattern.data.length)
        }
    }
  });
});
