import { Tensor } from 'onnxruntime'
import ONNXModel from './model'
import { Pattern, PatternSizeError } from './pattern'
import {
  LOOP_DURATION,
  CHANNELS,
  MIN_ONSET_THRESHOLD,
  MAX_ONSET_THRESHOLD,
  NUM_SAMPLES,
  NOTE_DROPOUT
} from './constants'
import { linspace } from './util'

class PatternDataMatrix {
  /**
   * 2D data matrix that holds Pattern instances
  */
  outputShape: [number, number, number]
  _length: number
  _T: Float32Array[][]

  constructor (outputShape: [number, number, number], length: number) {
    this.outputShape = outputShape
    this._length = length
    this._T = this.empty()
  }

  empty (): Float32Array[][] {
    return Array.from({ length: this.length }, _ => {
      return Array.from({ length: this.length }, _ => {
        return new Float32Array(this.outputSize)
      })
    })
  }

  get length (): number {
    return this._length
  }

  set length (value: number) {
    this._length = value
    this._T = this.empty()
  }

  get matrixSize (): number {
    return this.length ** 2
  }

  get outputSize (): number {
    return this.outputShape[0] * this.outputShape[1] * this.outputShape[2]
  }

  append (p: Float32Array, i: number, j: number): void {
    if (i < this.length && j < this.length) {
      if (p.length === this.outputSize) {
        this._T[i][j] = p
      } else {
        throw new PatternSizeError(this.outputSize, p.length)
      }
    } else {
      console.warn(`Index (${i},${j}) is out of bounds for data matrix of size ${this.length}`)
    }
  }

  sample (i: number, j: number): Float32Array {
    return this._T[i][j]
  }
}

class Generator {
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
  model: ONNXModel
  _channels: number
  _loopDuration: number
  _outputShape: [number, number, number]
  _dims: number[]
  onsetsPattern: Pattern
  velocitiesPattern: Pattern
  offsetsPattern: Pattern
  _numSamples: number
  _noteDropout: number
  _minNoteDropout: number
  _maxNoteDropout: number
  _minOnsetThreshold: number
  _maxOnsetThreshold: number
  _gridSize: number
  _onsetsDataMatrix: PatternDataMatrix
  _velocitiesDataMatrix: PatternDataMatrix
  _offsetsDataMatrix: PatternDataMatrix

  constructor (
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
    if (typeof model === 'undefined') {
      throw new Error(
        'cannot directly access class constructor - use Generator.build(<params>) instead.'
      )
    }
    this.model = model
    this._numSamples = numSamples
    this._noteDropout = noteDropout
    this._channels = channels
    this._loopDuration = loopDuration
    this._outputShape = [1, this.loopDuration, this.channels]
    this._dims = [this.axisLength, this._loopDuration, this._channels]
    this._minOnsetThreshold = minOnsetThreshold
    this._maxOnsetThreshold = maxOnsetThreshold
    this.onsetsPattern = new Pattern(onsets, [1, LOOP_DURATION, CHANNELS])
    this.velocitiesPattern = new Pattern(velocities, [1, LOOP_DURATION, CHANNELS])
    this.offsetsPattern = new Pattern(offsets, [1, LOOP_DURATION, CHANNELS])
    this._onsetsDataMatrix = new PatternDataMatrix(this.outputShape, this.axisLength)
    this._velocitiesDataMatrix = new PatternDataMatrix(this.outputShape, this.axisLength)
    this._offsetsDataMatrix = new PatternDataMatrix(this.outputShape, this.axisLength)
  }

  get minOnsetThreshold (): number {
    return this._minOnsetThreshold
  }

  set minOnsetThreshold (value: number) {
    this._minOnsetThreshold = value
  }

  get maxOnsetThreshold (): number {
    return this._maxOnsetThreshold
  }

  set maxOnsetThreshold (value: number) {
    this._maxOnsetThreshold = value
  }

  get onsetThresholdRange (): number[] {
    return linspace(this._minOnsetThreshold, this._maxOnsetThreshold, this.axisLength)
  }

  get numSamples (): number {
    return this._numSamples
  }

  set numSamples (value: number) {
    this._numSamples = value
    this._onsetsDataMatrix.length = value
    this._velocitiesDataMatrix.length = value
    this._offsetsDataMatrix.length = value
  }

  get axisLength (): number {
    return Math.round(Math.sqrt(this._numSamples))
  }

  set noteDropout (value: number) {
    this._noteDropout = value
  }

  get noteDropout (): number {
    return this._noteDropout
  }

  get minNoteDropout (): number {
    return this._noteDropout - 0.05
  }

  get maxNoteDropout (): number {
    return this._noteDropout + 0.05
  }

  get channels (): number {
    return this._channels
  }

  set channels (value: number) {
    this._channels = value
    this._outputShape[2] = value
  }

  get loopDuration (): number {
    return this._loopDuration
  }

  set loopDuration (value: number) {
    this._loopDuration = value
    this._outputShape[1] = value
  }

  get outputShape (): [number, number, number] {
    return this._outputShape
  }

  get dims (): number[] {
    return this._dims
  }

  get onsets (): PatternDataMatrix {
    return this._onsetsDataMatrix
  }

  get velocities (): PatternDataMatrix {
    return this._velocitiesDataMatrix
  }

  get offsets (): PatternDataMatrix {
    return this._offsetsDataMatrix
  }

  static async build (
    onsets: Float32Array,
    velocities: Float32Array,
    offsets: Float32Array,
    minOnsetThreshold: number = MIN_ONSET_THRESHOLD,
    maxOnsetThreshold: number = MAX_ONSET_THRESHOLD,
    numSamples: number = NUM_SAMPLES,
    noteDropout: number = NOTE_DROPOUT,
    instruments: number = CHANNELS,
    sequenceLength: number = LOOP_DURATION
  ): Promise<Generator> {
    try {
      const model = await ONNXModel.build()
      return new Generator(
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
      )
    } catch (e) {
      console.error('failed to load Generator')
      throw new Error(e)
    }
  }

  get batchedInput (): Pattern {
    /**
     * Repeats input pattern batch_size times and returns a flat typed buffer.
     */
    let pattern = this.onsetsPattern.concatenate(this.velocitiesPattern, 2)
    pattern = pattern.concatenate(this.offsetsPattern, 2)

    let batch = pattern
    for (let i = 1; i < this.axisLength; i++) {
      batch = batch.concatenate(pattern, 0)
    }
    return batch
  }

  async run (): Promise<void> {
    /**
     * Generates model predictions as parameterized
     * by onsetThresholdRange, noteDropout, and numSamples.
     */
    const model = this.model
    const noteDropouts = linspace(this._minNoteDropout, this._maxNoteDropout, this.axisLength)
    const onsetThresholds = linspace(this._minOnsetThreshold, this._maxNoteDropout, this.axisLength)

    for (let i = 0; i < this.axisLength; i++) {
      const threshold = onsetThresholds[i]
      const dropout = noteDropouts[i]
      const output = await model.forward(this.batchedInput, dropout)

      const onsetsBatch = applyOnsetThreshold(output.onsets, this.dims, threshold).tensor()
      const velocitiesBatch = new Pattern(output.velocities, this.dims).tensor()
      const offsetsBatch = new Pattern(output.offsets, this.dims).tensor()

      for (let j = 0; j < this.axisLength; j++) {
        // TODO: Probably need to transpose all vectors
        const onsets = new Pattern([onsetsBatch[j]], this.outputShape)
        this._onsetsDataMatrix.append(onsets.data, i, j)

        const velocities = new Pattern([velocitiesBatch[j]], this.outputShape)
        this._velocitiesDataMatrix.append(velocities.data, i, j)

        const offsets = new Pattern([offsetsBatch[j]], this.outputShape)
        this._offsetsDataMatrix.append(offsets.data, i, j)
      }
    }
  }
}

function applyOnsetThreshold (onsets: Tensor, dims: number[], threshold: number): Pattern {
  const onsetsPattern = new Pattern(onsets, dims)
  onsetsPattern.data.map(v => {
    if (v < threshold) {
      return 0.0
    } else {
      return 1.0
    }
  })
  return onsetsPattern
}

export { applyOnsetThreshold, PatternDataMatrix }

export default Generator
