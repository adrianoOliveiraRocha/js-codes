/*
Example:
const spanishComparation = (a, b) => a.localeCompare(b, "es")
let palabras = ["ñandú", "oasis", "mano", "natural", "mítico", "musical"]
console.log(palabras.sort(spanishComparation))
console.log(palabras.sort(invert(spanishComparation)))
*/
module.exports = fn => (...args) => -fn(...args)