import { performance } from 'perf_hooks';
import Generator from '../generator';
import { getRequestBody } from './fixtures.spec';


describe('ONNXModel', function() {
    it('builds and initializes methods and variables', async function() {
        let requestBody = await getRequestBody();
        let stbuild = performance.now();
        const generator = await Generator.build(
            requestBody.onsets, 
            requestBody.velocities, 
            requestBody.offsets, 
            requestBody.numSamples, 
            requestBody.noteDropout
        );
        console.log('time to build:', performance.now() - stbuild);
        let st = performance.now();
        await generator.populate();
        console.log('time to populate:', performance.now() - st);
        let data = generator.data;
        console.log(`Number of data points: ${Object.keys(data).length}`);
        console.log(`Example: ${data['0,0']}`)
    })
});