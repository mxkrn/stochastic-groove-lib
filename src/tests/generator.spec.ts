import { performance } from 'perf_hooks';
import Generator from '../generator';
import { getRequestBody } from './fixtures.spec';


describe('ONNXModel', function() {
    it('builds and initializes methods and variables', async function() {
        const requestBody = await getRequestBody();
        const stbuild = performance.now();
        const generator = await Generator.build(
            requestBody.onsets, 
            requestBody.velocities, 
            requestBody.offsets, 
            requestBody.numSamples, 
            requestBody.noteDropout
        );
        console.log('time to build:', performance.now() - stbuild);
        const st = performance.now();
        await generator.populate();
        console.log('time to populate:', performance.now() - st);
        const data = generator.data;
        console.log(`Number of data points: ${Object.keys(data).length}`);
        console.log(`Example: ${data['0,0']}`)
    })
});