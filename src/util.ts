import { STEPS_PER_QUARTER } from './constants';


function signedMod(value: number, base: number=(STEPS_PER_QUARTER / 4)): number {
    const mod = value % base;
    if (mod <= (base / 2)) {
        return mod 
    } else {
        return mod - base;
    }
}

function scale(value: number, minIn: number, maxIn: number, minOut: number, maxOut: number): number {
    value = Math.min(Math.max(value, minIn), maxIn);
    value = (value - minIn)/(maxIn - minIn) * (maxOut - minOut) + minOut;
    return value;
}

function initArray(shape: Array<number>): Array<Array<number>> {
    return Array.from({ length: shape[0] }, _ => {
        const array = Array.from({ length: shape[1] }, _ => 0);
        return array;
    });
}

export {
    signedMod,
    scale,
    initArray
}