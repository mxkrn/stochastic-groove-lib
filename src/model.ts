import path from 'path'

import { InferenceSession, Tensor } from 'onnxruntime'
import { LOOP_DURATION, CHANNELS } from './constants'
import { zeroArray } from './util'
import { Pattern } from './pattern'
import { stringify } from 'querystring'

interface ModelMeta {
  name: string
  path: string
  latentSize: number
  channels: number
  loopDuration: number
}

class ModelType {
  _name: string
  private readonly _models: Record<string, ModelMeta>
  _modelDir: string = path.dirname(__dirname) + '/assets/models/'
  private readonly _meta: ModelMeta

  constructor (name: string) {
    this._name = name
    this._models = {}

    this._models.syncopate = {
      name: 'syncopate',
      path: this.modelDir + 'syncopate.onnx',
      latentSize: 2,
      channels: CHANNELS,
      loopDuration: LOOP_DURATION
    }
    this._models.groove = {
      name: 'groove',
      path: this.modelDir + 'groove.onnx',
      latentSize: 32,
      channels: CHANNELS,
      loopDuration: LOOP_DURATION
    }
    this._meta = this._models[this._name]
    if (this._meta === undefined) {
      throw new Error(`Invalid model name: ${this._name}`)
    }
  }

  get name (): string {
    return this._name
  }

  set name (value: string) {
    this._name = value
  }

  get modelDir (): string {
    return this._modelDir
  }

  set modelDir (value: string) {
    this._modelDir = value;
  }

  get meta (): ModelMeta {
    return this._meta
  }
}

class ONNXModel {
  /**
   * Wraps ONNX model for stateful inference sessions
   */
  session: InferenceSession
  meta: ModelMeta
  deltaZ: number[]

  constructor (session: InferenceSession, meta: ModelMeta) {
    if (typeof session === 'undefined') {
      throw new Error(
        'cannot be called directly - use await Model.build(pattern) instead'
      )
    }
    this.session = session
    this.meta = meta
    this.deltaZ = zeroArray(meta.latentSize)
  }

  static async build (
    modelName: string
  ): Promise<ONNXModel> {
    /**
     * @filePath Path to ONNX model
     */
    const modelMeta = new ModelType(modelName).meta
    try {
      const session = await InferenceSession.create(modelMeta.path)
      return new ONNXModel(session, modelMeta)
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
    return output
  }
}

export { ONNXModel }
