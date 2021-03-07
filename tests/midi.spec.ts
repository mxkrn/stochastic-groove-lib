import assert from "assert"
import { DRUM_PITCH_CLASSES } from "../src/constants";
import { Pattern } from "../src/pattern";
import { readMidiFile, writeMidiFile } from "../src/midi";
import { arraysEqual } from "./helpers";
import { pitchToIndexMap } from "../src/util";

describe("read/writeMidiFile", function() {
  const dims = [1, 16, 9]
  const onsetsPattern = new Pattern(new Float32Array(dims[1] * dims[2]), dims)
  const velocitiesPattern = new Pattern(new Float32Array(dims[1] * dims[2]), dims)
  const offsetsPattern = new Pattern(new Float32Array(dims[1] * dims[2]), dims)

  const fillCells = [
    [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], 
    [6, 6], [7, 7], [8, 8], [9, 7], [10, 6], [11, 5], 
    [12, 4], [13, 3], [14, 2], [15, 1]
  ]
  fillCells.forEach((v) => {
    onsetsPattern.setcell(1., v[0], v[1])
    velocitiesPattern.setcell(v[1] * 0.1, v[0], v[1])
    offsetsPattern.setcell(0.5 - v[1] * 0.1, v[0], v[1])
  })
  const pitchMapping = pitchToIndexMap(
    DRUM_PITCH_CLASSES["pitch"],
    DRUM_PITCH_CLASSES["index"]
  )

  it("writes pattern", async function() {
    await writeMidiFile(onsetsPattern, velocitiesPattern, offsetsPattern, "test.mid")
  })
  it("reads pattern and arraysEqual", async function() {
    const [gotOnsetsPattern, gotVelocitiesPattern, gotOffsetsPattern] = await readMidiFile("test.mid", pitchMapping)
    const expectedOnsets = Array.from(onsetsPattern.data);
    const gotOnsets = Array.from(gotOnsetsPattern.data);
    assert.ok(arraysEqual(expectedOnsets, gotOnsets));

    let gotVelocities = Array.from(gotVelocitiesPattern.data);
    gotVelocities = gotVelocities.map(v => Math.round(v * 127))
    let expectedVelocities = Array.from(velocitiesPattern.data);
    expectedVelocities = expectedVelocities.map(v => Math.round(v * 127))
    assert.ok(arraysEqual(expectedVelocities, gotVelocities));

    let gotOffsets = Array.from(gotOffsetsPattern.data);
    gotOffsets = gotOffsets.map(v => Math.round(v * 10))
    let expectedOffsets = Array.from(offsetsPattern.data);
    expectedOffsets = expectedOffsets.map(v => Math.round(v * 10))
    assert.ok(arraysEqual(expectedOffsets, gotOffsets));
  })
})
