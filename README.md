## stochastic-groove-lib

**npm**
:link: https://www.npmjs.com/package/stochastic-groove-lib

Stochastic groove generates drum grooves using a low-dimensional representation learned using a VAE architecture with an RNN encoder and decoder. Based on a user input drum pattern, the algorithm generates variations of this pattern and allows the user to exercise stylistic control over the generated patterns.

This is the core library of the application containing the API source code used by the corresponding Max for Live application. `onnxruntime` is used to perform inference using our model exported to ONNX format. `jzz-midi-smf` is used to handle reading and writing MIDI.
