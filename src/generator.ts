import ONNXModel from "./model";
import PatternBuffer from "./pattern";
import { LOOP_DURATION, CHANNELS } from "./constants";

class Generator {
  /**
   * This class wraps our loaded ONNX model and decodes based on incoming request data
   * @model           Instance of ONNXModel
   * @pattern         BasePattern to be used as input; must be a flat Typed buffer
   * @numSamples      Number of samples to generate (will be rounded to nearest sqrt)
   * @noteDropout     Average note dropout probability
   * @channels        Number of channels in input sequence a.k.a. instruments
   * @loopDuration    Length of sequence loop in 16th notes
   */
  model: ONNXModel;
  model_path: string;
  channels: number;
  loopDuration: number;
  numSamples: number;
  noteDropout: number;
  patternBuffer: PatternBuffer;
  latentCoordinates: Array<string>;
  _gridSize: number;
  _data: Record<string, Record<string, Float32Array>>;

  constructor(
    model: ONNXModel,
    onsets: Float32Array,
    velocities: Float32Array,
    offsets: Float32Array,
    numSamples: number,
    noteDropout: number,
    channels: number,
    loopDuration: number
  ) {
    if (typeof model == "undefined") {
      throw new Error(
        "cannot directly access class constructor - use Generator.build(<params>) instead."
      );
    }
    this.model = model;
    this.numSamples = numSamples;
    this.noteDropout = noteDropout;
    this.channels = channels;
    this.loopDuration = loopDuration;

    this.patternBuffer = new PatternBuffer(
      onsets,
      velocities,
      offsets,
      loopDuration,
      channels
    );

    this._initialize();
  }
  get data(): Record<string, Record<string, Float32Array>> {
    return this._data;
  }
  get gridSize(): number {
    return this._gridSize;
  }
  static async build(
    onsets: Float32Array,
    velocities: Float32Array,
    offsets: Float32Array,
    numSamples = 400,
    noteDropout = 0.5,
    instruments = CHANNELS,
    sequenceLength = LOOP_DURATION
  ): Promise<Generator> {
    try {
      const model = await ONNXModel.build();
      return new Generator(
        model,
        onsets,
        velocities,
        offsets,
        numSamples,
        noteDropout,
        instruments,
        sequenceLength
      );
    } catch (e) {
      console.error("failed to load LatentSpace");
      throw new Error(e);
    }
  }
  async populate(): Promise<void> {
    /**
     * Populates this.data by decoding the latent coordinates array this.zs in parallel
     */
    const data = this._data;
    const patternBuffer = this.patternBuffer;
    const model = this.model;
    const noteDropout = this.noteDropout;

    const promises = Object.keys(this._data).map(async (z) => {
      if (z == "0,0") {
        data[z]["onsets"] = patternBuffer.onsetsBuffer;
        data[z]["velocities"] = patternBuffer.velocitiesBuffer;
        data[z]["offsets"] = patternBuffer.offsetsBuffer;
      } else {
        const deltaZ = z.split(",").map((z_i) => {
          return parseFloat(z_i);
        });
        const output = await model.forward(
          patternBuffer.buffer,
          1,
          noteDropout
        );
        const newPatternBuffer = await PatternBuffer.from_tensors(
          output.onsets,
          output.velocities,
          output.offsets
        );
        data[z]["onsets"] = newPatternBuffer.onsetsBuffer;
        data[z]["velocities"] = newPatternBuffer.velocitiesBuffer;
        data[z]["offsets"] = newPatternBuffer.offsetsBuffer;
      }
    });
    await Promise.all(promises);
    this._data = data;
  }
  private _initialize() {
    const gridSize = Math.round(Math.sqrt(this.numSamples) / 2);
    const zs = [];
    for (let x = -gridSize; x < gridSize; x++) {
      for (let y = -gridSize; y < gridSize; y++) {
        zs.push(`${x},${y}`);
      }
    }
    this._gridSize = gridSize;
    this._data = {};
    zs.forEach((z) => {
      this._data[z] = {
        onsets: new Float32Array(this.loopDuration * this.channels),
        velocities: new Float32Array(this.loopDuration * this.channels),
        offsets: new Float32Array(this.loopDuration * this.channels),
      };
    });
  }
}

export default Generator;
