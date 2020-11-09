import fs from 'fs';
import PatternBuffer from '../pattern';

async function testPattern() {
    const filePath = 'src/tests/data/funkydrummer.mid';
    const data = fs.readFileSync(process.cwd() + '/assets/drum_pitch_classes.json', 'utf-8');
    const pitchMapping = JSON.parse(data);
    const patternBuffer = await PatternBuffer.from_midi(filePath, pitchMapping['index']);
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