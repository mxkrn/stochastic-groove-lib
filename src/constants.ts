import path from "path";
import fs from "fs";

const data = fs.readFileSync(
  path.dirname(__dirname) + "/assets/drum_pitch_classes.json",
  "utf-8"
);
const DRUM_PITCH_CLASSES = JSON.parse(data);

const DRUM_PITCH_MAP = Object.keys(DRUM_PITCH_CLASSES["pitch"]);
const CHANNELS = DRUM_PITCH_MAP.length; // onsets, velocities, offsets
const PITCHES = Object.values(DRUM_PITCH_MAP);

const LOOP_DURATION = 16; // 2bars x 16th notes
const MIN_VELOCITY_THRESHOLD = 10; // ignore loops with onsets less than this
const NOTE_THRESHOLD = 0.5;
const MIN_ONSET_THRESHOLD = 0.3;
const MAX_ONSET_THRESHOLD = 0.7;

export {
  DRUM_PITCH_CLASSES,
  DRUM_PITCH_MAP,
  CHANNELS,
  PITCHES,
  LOOP_DURATION,
  MIN_VELOCITY_THRESHOLD,
  NOTE_THRESHOLD,
  MIN_ONSET_THRESHOLD,
  MAX_ONSET_THRESHOLD
};
