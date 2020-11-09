import path from 'path';
import fs from 'fs';

const DEFAULT_MODEL = path.dirname(__dirname) + '/assets/models/latest.onnx';

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

const data = fs.readFileSync(path.dirname(__dirname) + '/assets/drum_pitch_classes.json', 'utf-8');
const DRUM_PITCH_CLASSES = JSON.parse(data);

const DRUM_PITCH_MAP = Object.keys(DRUM_PITCH_CLASSES['pitch']);
const CHANNELS = DRUM_PITCH_MAP.length;  // onsets, velocities, offsets
const PITCHES = Object.values(DRUM_PITCH_MAP);

const STEPS_PER_QUARTER = 96;
const LOOP_DURATION = 32; // 2bars x 16th notes
const MIN_VELOCITY_THRESHOLD = 10; // ignore loops with onsets less than this
const ORIGINAL_DIM = CHANNELS * LOOP_DURATION;
const NOTE_THRESHOLD = 0.5;

export {
    DEFAULT_MODEL,
    MIDI_MAPPING,
    DRUM_TRACK_MAPPING,
    DRUM_PITCH_MAP,
    CHANNELS,
    PITCHES,
    STEPS_PER_QUARTER,
    LOOP_DURATION,
    ORIGINAL_DIM,
    MIN_VELOCITY_THRESHOLD,
    NOTE_THRESHOLD
}