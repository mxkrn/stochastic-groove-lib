import fs from 'fs';
import PatternBuffer from '../pattern';
import { pitchToIndexMap } from '../util';

async function testPattern() {
    const filePath = 'src/tests/data/Variation_01.mid';
    const data = fs.readFileSync(process.cwd() + '/assets/drum_pitch_classes.json', 'utf-8');
    const drumPitchClasses = JSON.parse(data);
    const pitchIndexMap = pitchToIndexMap(drumPitchClasses["pitch"], drumPitchClasses["index"]);
    const patternBuffer = await PatternBuffer.from_midi(filePath, pitchIndexMap);
    return patternBuffer;
}

async function getRequestBody() {
    const patternBuffer = await testPattern();
    return {
        "onsets": patternBuffer.onsetsBuffer,
        "velocities": patternBuffer.velocitiesBuffer,
        "offsets": patternBuffer.offsetsBuffer,
        "numSamples": 400,
        "noteDropout": 0.5
    }
}

export { testPattern, getRequestBody };