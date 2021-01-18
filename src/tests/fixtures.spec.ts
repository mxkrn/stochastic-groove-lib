import PatternBuffer from "../pattern";
import { pitchToIndexMap } from "../util";
import { DRUM_PITCH_CLASSES } from "../constants";
import Pattern from "../tensor";
import { readMidiFile } from "../midi";

async function testPatternBuffer() {
  const filePath = "src/tests/data/Variation_02.mid";
  // const data = fs.readFileSync(process.cwd() + '/assets/drum_pitch_classes.json', 'utf-8');
  // const drumPitchClasses = JSON.parse(data);
  const pitchIndexMap = pitchToIndexMap(
    DRUM_PITCH_CLASSES["pitch"],
    DRUM_PITCH_CLASSES["index"]
  );
  const patternBuffer = await PatternBuffer.from_midi(filePath, pitchIndexMap);
  return patternBuffer;
}

async function testPattern(): Promise<[Pattern, Pattern, Pattern]> {
  const filePath = "src/tests/data/Variation_02.mid";
  const pitchMapping = pitchToIndexMap(
    DRUM_PITCH_CLASSES["pitch"],
    DRUM_PITCH_CLASSES["index"]
  );
  return await readMidiFile(filePath, pitchMapping);
}

async function getRequestBody() {
  const batchSize = 1;
  const patternBuffer = await testPatternBuffer();
  return {
    onsets: patternBuffer.onsetsBuffer,
    velocities: patternBuffer.velocitiesBuffer,
    offsets: patternBuffer.offsetsBuffer,
    numSamples: 400,
    noteDropout: 0.5,
  };
}

function getDeltaZ(buffer: Float32Array, latentSize: number) {
  const deltaZ = Array.from({ length: latentSize }, (_) => 0);
  return deltaZ;
}

export { testPatternBuffer, testPattern, getRequestBody, getDeltaZ };
