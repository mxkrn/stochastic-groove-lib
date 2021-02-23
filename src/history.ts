import { Pattern } from "./pattern"


class PatternHistory {

    _length: number
    _queue: Array<Pattern>

    /**
     * Contrained list to hold pattern history
     * @param {number} length: Max number of patterns in queue 
     */
    constructor(length: number) {
        this._length = length
        this._queue = [];
    }
    get length() {
        return this._length;
    }
    set length(value: number) {
        this._length = value;
    }
    async append(pattern: Pattern) {
        this._queue.unshift(pattern);
        if (this._queue.length > this._length) {
            let v = this._queue.pop()
        }
    }
    sample(idx: number) {
        return this._queue[idx];
    }
}

export default PatternHistory