/*
const arrTest = [3, 4, 5, -12, 32, 4, -3]
const isNegative = v => v < 0
let negatives = arrTest.filter(isNegative)
let nonNegatives = arrTest.filter(not(isNegative))

console.log(negatives, nonNegatives)
*/

const not = fn => (...args) => !fn(...args)

module.exports = not