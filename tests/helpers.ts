import { pitchToIndexMap } from "../src/util";
import { DRUM_PITCH_CLASSES } from "../src/constants";
import { Pattern } from "../src/pattern";
import { readMidiFile } from "../src/midi";


async function testPattern(): Promise<[Pattern, Pattern, Pattern]> {
  const filePath = "tests/fixtures/Variation_02.mid";
  const pitchMapping = pitchToIndexMap(
    DRUM_PITCH_CLASSES["pitch"],
    DRUM_PITCH_CLASSES["index"]
  );
  return await readMidiFile(filePath, pitchMapping);
}

type RequestBodyType = Record<string, Float32Array | number>

async function getRequestBody(): Promise<RequestBodyType> {
  const [onsetsPattern, velocitiesPattern, offsetsPattern] = await testPattern();
  return {
    onsets: onsetsPattern.data,
    velocities: velocitiesPattern.data,
    offsets: offsetsPattern.data,
    numSamples: 400,
    minNoteThreshold: 0.3,
    maxNoteThreshold: 0.7,
    noteDropout: 0.5,
  };
}

function arraysEqual(a, b): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (a[0].constructor === Array) {
        for (let j = 0; j < a[0].length; ++j) {
            if (a[0][0].constructor === Array) {
                for (let k = 0; k < a[0][0].length; ++k) {
                    const aValue = a[i][j][k]
                    const bValue = b[i][j][k]
                    if (aValue !== bValue) return false;   
                }
            } else {
                if (a[i][j] !== b[i][j]) return false;
            }
        }
    } else {
        if (a[i] !== b[i]) return false;
    }
  }
  return true;
}

export { arraysEqual, testPattern, getRequestBody };
