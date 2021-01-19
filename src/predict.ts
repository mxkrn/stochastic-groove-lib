import ONNXModel from "./model";
import Pattern from "./pattern";
import { LOOP_DURATION, CHANNELS, MIN_ONSET_THRESHOLD, MAX_ONSET_THRESHOLD } from "./constants";
import { linspace }  from "./util";

class Predictor {
  /**
   * This class wraps our loaded ONNX model and fills an Object (data)
   * with predicted patterns
   * 
   * @model           Instance of ONNXModel
   * @onsets          Onsets array to be used as input; must be a 
                      flat Typed buffer
   * @velocities      Velocities array to be used as input; must be a 
                      flat Typed buffer
   * @offsets         Offsets array to be used as input; must be a 
                      flat Typed buffer
   * @numSamples      Number of samples to generate - the sqrt is taken and the 
                      result rounded and used as the axis size of the pattern grid
   * @noteDropout     Mean note dropout probability
   * @noteDropoutVar  Variance around mean note dropout probability
   * @channels        Number of channels in input sequence a.k.a. instruments
   * @loopDuration    Length of sequence loop in 16th notes
   */
  model: ONNXModel;
  channels: number;
  loopDuration: number;
  dims: Array<number>;
  _numSamples: number;
  noteDropout: number;
  _minNoteDropout: number;
  _maxNoteDropout: number;
  _minOnsetThreshold: number;
  _maxOnsetThreshold: number;
  onsetsPattern: Pattern;
  velocitiesPattern: Pattern;
  offsetsPattern: Pattern;
  _gridSize: number;
  _data: Record<string, Record<string, Float32Array>> = {};

  constructor(
    model: ONNXModel,
    onsets: Float32Array,
    velocities: Float32Array,
    offsets: Float32Array,
    numSamples: number,
    noteDropout: number,
    channels: number,
    loopDuration: number,
    minOnsetThreshold: number,
    maxOnsetThreshold: number
  ) {
    if (typeof model == "undefined") {
      throw new Error(
        "cannot directly access class constructor - use Generator.build(<params>) instead."
      );
    }
    this.model = model;
    this._numSamples = numSamples;
    this.noteDropout = noteDropout;
    this.channels = channels;
    this.loopDuration = loopDuration;
    this.dims = [this.axisLength, this.loopDuration, this.channels]
    this._minOnsetThreshold = minOnsetThreshold;
    this._maxOnsetThreshold = maxOnsetThreshold;
    this.onsetsPattern = new Pattern(onsets, [1, LOOP_DURATION, CHANNELS]);
    this.velocitiesPattern = new Pattern(velocities, [1, LOOP_DURATION, CHANNELS]);
    this.offsetsPattern = new Pattern(offsets, [1, LOOP_DURATION, CHANNELS]);
  }
  get data(): Record<string, Record<string, Float32Array>> {
    return this._data;
  }
  set minOnsetThreshold(value: number) {
    this._minNoteDropout = value;
  }
  set maxOnsetThreshold(value: number) {
    this._maxNoteDropout = value;
  }
  set numSamples(value: number) {
    this._numSamples = value;
  }
  get onsetThresholdRange(): Array<number> {
    return linspace(this._minOnsetThreshold, this._maxOnsetThreshold, this.axisLength)
  }
  get axisLength(): number {
    return Math.round(Math.sqrt(this._numSamples));
  }
  get minNoteDropout(): number {
    return this.noteDropout - 0.05;
  }
  get maxNoteDropout(): number {
    return this.noteDropout + 0.05;
  }
  static async build(
    onsets: Float32Array,
    velocities: Float32Array,
    offsets: Float32Array,
    numSamples = 100,
    noteDropout = 0.5,
    instruments = CHANNELS,
    sequenceLength = LOOP_DURATION,
    minOnsetThreshold = MIN_ONSET_THRESHOLD,
    maxOnsetThreshold = MAX_ONSET_THRESHOLD
  ): Promise<Predictor> {
    try {
      const model = await ONNXModel.build();
      return new Predictor(
        model,
        onsets,
        velocities,
        offsets,
        numSamples,
        noteDropout,
        instruments,
        sequenceLength,
        minOnsetThreshold,
        maxOnsetThreshold
      );
    } catch (e) {
      console.error("failed to load LatentSpace");
      throw new Error(e);
    }
  }
  get input(): Pattern {
    /**
     * Repeats input pattern batch_size times and returns a flat typed buffer.
     */
    let pattern = this.onsetsPattern.concatenate(this.velocitiesPattern, 2);
    pattern = pattern.concatenate(this.offsetsPattern, 2);

    let pattern_batch = pattern;
    for (let i = 1; i < this.axisLength; i++) {
      pattern_batch = pattern_batch.concatenate(pattern, 0);
    }
    return pattern_batch;
  }
  async run(): Promise<void> {
      /**
       * Fills this.data with model predictions as parameterized
       * by onsetThresholdRange, noteDropout, and numSamples.
       */
      const model = this.model;  // onnx model
      const noteDropouts = linspace(this._minNoteDropout, this._maxNoteDropout, this.axisLength);
      const onsetThresholds = linspace(this._minOnsetThreshold, this._maxNoteDropout, this.axisLength);

      for (let x = 1; x <= this.axisLength; x++) {
          const threshold = onsetThresholds[x];
          const dropout = noteDropouts[x];
          const output = await model.forward(this.input, dropout)
          for (let y = 0; y < output.onsets.dims[0]; y++) {
            this._data[`${x},${y}`] = {
              onsets: process_onsets(output.onsets.data, this.dims, threshold),
              velocities: process_velocities(output.velocities.data, this.dims),
              offsets: process_offsets(output.offsets.data, this.dims),
            }
          }
      }
  }
}

function process_onsets(onsets, dims: Array<number>, threshold: number): Float32Array {
  const onsetsPattern = new Pattern(onsets, dims);
  onsetsPattern.data.map(v => {
    if (v < threshold) {
      return 0.;
    } else {
      return 1.;
    }
  });
  return Float32Array.from(onsetsPattern.data);
}

function process_velocities(velocities, dims: Array<number>): Float32Array {
  const velocitiesPattern = new Pattern(velocities, dims);
  return Float32Array.from(velocitiesPattern.data);
}

function process_offsets(offsets, dims: Array<number>): Float32Array {
  const onsetsPattern = new Pattern(offsets, dims);
  return Float32Array.from(onsetsPattern.data);
}

export default Predictor;
