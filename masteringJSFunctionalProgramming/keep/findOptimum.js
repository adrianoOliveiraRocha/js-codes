/*
const findMaximum = findOptimum((x, y) => (x > y ? x : y))
const findMinimum = findOptimum((x, y) => (x < y ? x : y))

const myArray = [22, 9, 60, 12, 4, 56]

let max = findMaximum(myArray)
let min = findMinimum(myArray)
*/
module.exports = fn => arr => arr.reduce(fn)
