const parseArgs = require("minimist");

const { pitchToIndexMap } = require("../dist/util");
const { DRUM_PITCH_CLASSES } = require("../dist/constants");
const { Pattern } = require("../dist/pattern");
const { readMidiFile } = require("../dist/midi");
const ONNXModel = require("../dist/model").default;
const { applyOnsetThreshold } = require("../dist/generate");

const argv = parseArgs(process.argv.slice(2));
const filePath = argv.filepath;
console.log(`Loading MIDI from ${filePath}`);

const noteDropout = 1;
const threshold = 0.5
const pitchMapping = pitchToIndexMap(
  DRUM_PITCH_CLASSES["pitch"],
  DRUM_PITCH_CLASSES["index"]
)

let inputOnsets;
let inputVelocities;
let inputOffsets;

let outputOnsets;
let outputVelocities;
let outputOffsets;

function predict(model) {
  // zero velocities and offsets as input for groove model
  const velocities = new Pattern(new Float32Array(144), inputOnsets.shape);
  const offsets = new Pattern(new Float32Array(144), inputOnsets.shape);

  let pattern = inputOnsets.concatenate(velocities, 2)
  pattern = pattern.concatenate(offsets, 2)

  model.forward(pattern, inputOnsets.shape, noteDropout).then((output) => {
    outputOnsets = applyOnsetThreshold(output.onsets, inputOnsets.shape, threshold).tensor();
    outputVelocities = new Pattern(output.velocities, inputOnsets.shape).tensor();
    outputOffsets = new Pattern(output.offsets, inputOnsets.shape).tensor();
    console.log("Done.");
  })
}

readMidiFile(filePath, pitchMapping)
  .then((output) => {
    inputOnsets = output[0];
    inputVelocities = output[1];
    inputOffsets = output[2];

    console.log("Loaded file.");
    ONNXModel.build("groove").then((model) => predict(model));
  })
  .catch((e) => {
    console.log("Something went wrong: ", e)
  })

