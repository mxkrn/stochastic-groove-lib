import fs from 'fs';
import PatternBuffer from '../pattern';

async function testPattern() {
    let filePath = 'src/tests/data/funkydrummer.mid';
    let data = fs.readFileSync(process.cwd() + '/assets/drum_pitch_classes.json', 'utf-8');
    let pitchMapping = JSON.parse(data);
    let patternBuffer = await PatternBuffer.from_midi(filePath, pitchMapping['index']);
    return patternBuffer;
}

async function getRequestBody() {
    let patternBuffer = await testPattern();
    return {
        "onsets": patternBuffer.onsetsBuffer,
        "velocities": patternBuffer.velocitiesBuffer,
        "offsets": patternBuffer.offsetsBuffer,
        "numSamples": 400,
        "noteDropout": 0.5
    }
}

export { testPattern, getRequestBody };