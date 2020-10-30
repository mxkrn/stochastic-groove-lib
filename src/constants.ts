import path from 'path';

const DEFAULT_MODEL = path.dirname(__dirname) + '/assets/vae_gru_gmd_z=2_1600764564.onnx';
const MIDI_MAPPING = {
    36: 0,
    37: 0,
    38: 1,
    39: 1,
    40: 1,
    41: 2,
    42: 2,
    43: 2,
    44: 3,
    45: 3,
    46: 4,
    47: 4,
    48: 5,
    49: 6,
    50: 7,
    51: 8
  };
  
  const DRUM_TRACK_MAPPING = {
    'kick': 36,
    'snare': 38,
    'ch': 42,
    'lt': 45,
    'oh': 46,
    'mt': 48,
    'crash': 49,
    'ht': 50,
    'ride': 51,
  };
  const DRUM_TRACKS = Object.keys(DRUM_TRACK_MAPPING);
  const NUM_DRUM_TRACKS = DRUM_TRACKS.length;
  const PITCHES = Object.values(DRUM_TRACK_MAPPING);
  const STEPS_PER_QUARTER = 96;
  const LOOP_DURATION = 32; // 2bars x 16th note
  const MIN_VELOCITY_THRESHOLD = 10; // ignore loops with onsets less than this num
  const ORIGINAL_DIM = NUM_DRUM_TRACKS * LOOP_DURATION;
  
  // exports
  export {
      DEFAULT_MODEL,
      MIDI_MAPPING,
      DRUM_TRACK_MAPPING,
      DRUM_TRACKS,
      NUM_DRUM_TRACKS,
      PITCHES,
      STEPS_PER_QUARTER,
      LOOP_DURATION,
      ORIGINAL_DIM,
      MIN_VELOCITY_THRESHOLD
  }