"use strict";

function pad(str, char, count, isStart) {
    if (typeof str !== 'string' || typeof char !== 'string' || typeof count !== 'number') {
        throw new Error('Недійсні вхідні параметри');
    }
    let charactersToAdd = Math.max(0, count - str.length);
    let padding = char.repeat(charactersToAdd);
    return isStart ? padding + str : str + padding;
}

let paddedStart = pad('Hello', '*', 7, true);
console.log(paddedStart);

let paddedEnd = pad('How are you', '?', 19, false);
console.log(paddedEnd);