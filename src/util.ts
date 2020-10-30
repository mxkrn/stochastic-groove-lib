import { STEPS_PER_QUARTER } from './constants';

function converterMap(n: number, inverse: boolean): object {
    /**
     * Generate all binary permutations of pattern length n
     * 
     *      n = 2 -> ['00', '01', '10', '11']
     * 
     * @param {*} n pattern length
     */
    const patterns = {}

    let vocab_size = Math.pow(2, n);
    for (let i = 0; i < vocab_size; i++) {
        const s = bin(i)
        let out = "";
        for (let j = 0; j < (n - s.length); j++) {
            out += "0";
        }
        out += s;
        let tensor = string_to_tensor(out);
        if (inverse) {
            patterns[i] = tensor;
        } else {
            patterns[tensor.toString()] = i;
        }
    }
    return patterns;
}

function bin(n: number): string {
    /**
     * Convert decimal to binary
     */
    if (n < 0) {
        n = 0xFFFFFFFF + n + 1;
    } 
    return parseInt(n.toString(), 10).toString(2);
}  

function string_to_tensor(s: string) {
    /**
     * Convert string to Array
     */
    let tensor = [];
    for (let i = 0; i < s.length; i++) {
        tensor.push(parseFloat(s[i]));
    }
    return tensor;
}

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

export {
    signedMod,
    scale,
    converterMap
}