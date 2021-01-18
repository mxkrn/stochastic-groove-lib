import fs from "fs";
const JZZ = require("jzz");
require("jzz-midi-smf")(JZZ);

import PatternBuffer from "./pattern";
import Pattern from "./tensor";
import { zeroMatrix, signedMod } from "./util";
import { LOOP_DURATION, CHANNELS } from "./constants";


const FACTORY_PRESET_MAPPING = {
    "Funk 102": "/assets/presets/funk_102.mid",
    "House 120": "/assets/presets/house_120.mid"
}

class MidiPatternFactory {
    /**
     * Provides access to MIDI factory presets
     */
    factoryPathMapping: Record<string, string>;

    constructor() {
        this.factoryPathMapping = FACTORY_PRESET_MAPPING;
        
    }
    set pathToMidi(path: string) {
        this.pathToMidi = path;
    }
    getPresetPath(fileName: string): string {
        return this.factoryPathMapping[fileName];
    }
}

class MidiPitchInterface {
    /**
     * Serves as an interface to map MIDI pitches
     * to instruments and their corresponding indices.
     */
    pitchMap: Record<string, string>;
    instrumentMap: Record<string, string>;

    constructor() {
        // load default pitch and instrument maps
    }
}

// TODO: Refactor using EventEmitter
function processMidiEvent(event, pitchMapping, stepsPer16th) {
  const step = event["tt"] / stepsPer16th;
  const stepIndex = Math.round(step);
  const pitch = parseInt(event["1"]);
  const channelIndex = pitchMapping[pitch];
  const velocity = event["2"];
  const offset = step - stepIndex;
  return [stepIndex, channelIndex, velocity, offset];
}

async function readMidiFile(filePath: string, pitchMapping: Record<string, number>): Promise<[Pattern, Pattern, Pattern]> {
  // get MIDI data
  const binary = fs.readFileSync(filePath, "binary");
  const midiSMF = new JZZ.MIDI.SMF(binary);
  const stepsPerQuarter = midiSMF.ppqn;
  const stepsPer16th = stepsPerQuarter / 4;

  const onsets = Pattern.zeros([1, LOOP_DURATION, CHANNELS]);
  const velocities = Pattern.zeros([1, LOOP_DURATION, CHANNELS]);
  const offsets = Pattern.zeros([1, LOOP_DURATION, CHANNELS]);

  midiSMF.forEach((seq) => {
    for (let j = 0; j < seq.length; j++) {
      const event = seq[j];
      if ((event["0"] == 144) && (event["2"] > 0)) {
        const [stepIndex, channelIndex, velocity, offset] = processMidiEvent(event, pitchMapping, stepsPer16th);
        if (stepIndex < LOOP_DURATION) {
          onsets[0][stepIndex][channelIndex] = 1.;
          velocities[0][stepIndex][channelIndex] = velocity;
          offsets[0][stepIndex][channelIndex] = offset;
        }
      }
    }
  });
  
  const onsetsPattern = new Pattern(onsets, [1, LOOP_DURATION, CHANNELS]);
  const velocitiesPattern = new Pattern(velocities, [1, LOOP_DURATION, CHANNELS]);
  const offsetsPattern = new Pattern(onsets, [1, LOOP_DURATION, CHANNELS]);
  return [onsetsPattern, velocitiesPattern, offsetsPattern];
}

export { readMidiFile };
// async function readMidiFile(filePath: string, pitchMapping: Record<string, number>): Promise<PatternBuffer> {
    // const onsets = zeroMatrix([CHANNELS, LOOP_DURATION]);
    // const velocities = zeroMatrix([CHANNELS, LOOP_DURATION]);
    // const offsets = zeroMatrix([CHANNELS, LOOP_DURATION]);

    // // get MIDI data
    // const binary = fs.readFileSync(filePath, "binary");
    // const midiSMF = new JZZ.MIDI.SMF(binary);
    // const stepsPerQuarter = midiSMF.ppqn;
    // const stepsPer16th = stepsPerQuarter / 4;

    // const events = [];
    // const pitches = [];

    // midiSMF.forEach((seq) => {
    //   for (let j = 0; j < seq.length; j++) {
    //     const event = seq[j];
    //     if ((event["0"] == 144) && (event["2"] > 0)) {
    //       const step = event["tt"] / stepsPer16th;
    //       const stepIndex = Math.round(step);
    //       const pitch = parseInt(event["1"]);
    //       const channelIndex = pitchMapping[pitch];
    //       const velocity = event["2"];
    //       const offset = step - stepIndex;
    //       pitches.push(pitch);
    //       events.push({
    //         "step": stepIndex,
    //         "pitch": pitch,
    //         "channel": channelIndex,
    //         "velocity": velocity,
    //         "offset": offset
    //       });
    //     }
    //   }
    // });
    // const unique = (value, index, self) => {
    //   return self.indexOf(value) === index;
    // };
    // const uniquePitches = pitches.filter(unique);
    // uniquePitches.sort();
    // for (let i = 0; i < uniquePitches.length; i++) {
    //   const p = uniquePitches[i];
    //   if (p.toString() in Object.keys(pitchMapping)) {
    //     // Currently assigning a new index based on ordered MIDI pitch values
    //     // very lame way of handling missing MIDI pitches, will fix soon.
    //     pitchMapping[p.toString()] = i;
    //   }
    // }

    // const promises = midiSMF.map((seq) => {
    //   for (let j = 0; j < seq.length; j++) {
    //     const event = seq[j];
    //     const stepsPer16th = stepsPerQuarter / 4;
    //     if (event["0"] == 144 && event["2"] > 0) {
    //       // note-activation and note-on (not note-off)
    //       const step = Math.round(event.tt / stepsPer16th);
    //       if (step >= LOOP_DURATION) {
    //         // Limit pattern length to LOOP_DURATION
    //         break;
    //       }
    //       const pitch = event["1"].toString();
    //       const channel = pitchMapping[pitch];

    //       onsets[channel][step] = 1; // onsets

    //       const v = event["2"] / 127; // velocities
    //       velocities[channel][step] = v;

    //       const shift = signedMod(event.tt, stepsPer16th); // offsets
    //       const offset = shift / stepsPer16th;
    //       offsets[channel][step] = offset;
    //     }
    //   }
    // });
    // await Promise.all(promises);
    // return new PatternBuffer(onsets, velocities, offsets);
// }

// export { MidiPatternFactory, MidiPitchInterface, readMidiFile };