import path from 'path'

import { InferenceSession, Tensor } from 'onnxruntime'
import { LOOP_DURATION, CHANNELS } from './constants'
import { zeroArray } from './util'
import { Pattern } from './pattern'
import { stringify } from 'querystring'

const MODEL_NAME = 'latest.onnx'
const DEFAULT_MODEL = path.dirname(__dirname) + '/assets/models/' + MODEL_NAME
const LATENT_SIZE = 2

export { DEFAULT_MODEL, LATENT_SIZE }

class ONNXModel {
  /**
   * Wraps ONNX model for stateful inference sessions
   */
  session: InferenceSession
  channels: number
  loopDuration: number = LOOP_DURATION
  deltaZ: number[]

  constructor (session: InferenceSession, instruments: number) {
    if (typeof session === 'undefined') {
      throw new Error(
        'cannot be called directly - use await Model.build(pattern) instead'
      )
    }
    this.session = session
    this.channels = instruments
    this.deltaZ = zeroArray(LATENT_SIZE)
  }

  static async build (
    filePath: string = DEFAULT_MODEL,
    channels: number = CHANNELS
  ): Promise<ONNXModel> {
    /**
     * @filePath Path to ONNX model
     */
    try {
      const session = await InferenceSession.create(filePath)
      return new ONNXModel(session, channels)
    } catch (e) {
      throw new Error(`failed to load ONNX model: ${stringify(e)}`)
    }
  }

  async forward (
    input: Pattern,
    noteDropout = 0.5
  ): Promise<Record<string, Tensor>> {
    /**
     * Forward pass of ONNX model.
     *
     * @input       Pattern instance containing input data
     * @noteDropout Probability of note dropout when generating new pattern
     *
     * @returns output indices
     */
    const feeds = {
      input: input,
      delta_z: new Tensor('float32', this.deltaZ, [this.deltaZ.length]),
      note_dropout: new Tensor('float32', [noteDropout], [1])
    }
    const output = await this.session.run(feeds)
    // TODO: Test batched output for onset, velocity, and offset patterns
    return output
  }
}

export default ONNXModel
