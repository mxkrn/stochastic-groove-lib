stochastic-groove-lib
---
**npm**
:link: https://www.npmjs.com/package/stochastic-groove-lib

Stochastic groove generates drum grooves using a low-dimensional representation learned using a VAE architecture with an RNN encoder and decoder. Based on a user input drum pattern, the algorithm generates variations of this pattern and allows the user to exercise stylistic control over the generated patterns.

This is the core library of the application containing the API source code used by the corresponding Max for Live application. `onnxruntime` is used to perform inference using our model exported to ONNX format. `jzz-midi-smf` is used to handle reading and writing MIDI.

### Usage

Here a brief overview on the classes exposed via this API, more involved usage details can be found in the
corresponding `Max for Live` patch.

We use three different formats to represent our drum pattern, for inference using `ONNX`, reading and writing MIDI, and for storage and comms, respectively. The PatternBuffer constructor is overloaded to handle these input formats.

```
// Although it is allowed to use different values for channels and loopDuration, this ultimately depends on
// whether the exported ONNX model supports these variables being dynamic. The current exported model
// does NOT support this
const channels = 9;
const loopDuration = 32;
let buffer = new Float32Array(channels*loopDuration).fill(0);
let patternBuffer = new PatternBuffer(buffer, loopDuration, channels);

console.log(patternBuffer.buffer);
// for communication we need a lightweight 1-D array
// -> Float32Array(channels*loopDuration)<number>

console.log(patternBuffer.pattern);
// MIDI expects a 2-D array of channels and steps
// -> Array(channels)<Array(loopDuration)<number>>

console.log(patternBuffer.indices);
// the ONNX model expects categorical input, categories are represented by indices
// -> Array(loopDuration)<number>
```

You can also construct the `PatternBuffer` class directly from an incoming MIDI buffer.

```
const fs = require('fs');

// load pitch mapping object <- assets/drum_pitch_classes.json
let data = fs.readFileSync('drum_pitch_classes.json', 'utf-8');
let pitchClasses = JSON.parse(data);

let midiBuffer = fs.readFileSync('/path/to/file.mid', 'binary');
let patternBuffer = await PatternBuffer.from_midi(midiBuffer, pitchClasses['index']);
```

`ONNXModel` wraps the `InferenceSession` class from `onnxruntime` and allows the user to run a single forward pass. The async static method `build()` is used to construct the class.

```
ONNXModel.build()
    .then(async(model) => {
        let output = await model.decode(patternBuffer.indices, [0., 0.], 0.5);
        let outputPatternBuffer = new PatternBuffer(output);
    });
```

`Generator` is used to generate many patterns in parallel. Specifically, the input pattern initializes the `ONNXModel`, we then use changing latent variables and note dropout to generate variations on the input pattern and fill them into the `.data` variable. The async static method `build()` is used to construct the class.

```
Generator.build(patternBuffer.pattern)
    .then(async(generator) => {
        await generator.populate();

        console.log(generator.data['0,0']);
        // -> Float32Array(channels*loopDuration);
    })
```