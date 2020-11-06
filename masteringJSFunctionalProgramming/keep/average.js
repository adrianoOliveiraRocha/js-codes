/*
const sum = (x, y) => x + y
const myArray = [22, 9, 60, 12, 4, 56]

const average2 = (sum, val, ind, arr) => {
    sum += val
    return ind == arr.length - 1 ? sum / arr.length : sum
}

console.log(myArray.reduce(average2, 0))

Array.prototype.average = function() {
    return this.reduce((x, y) => x + y, 0) / this.length
}

let myAvg = [22, 9, 60, 12, 4, 56].average()
console.log(myAvg);

const average3 = arr => {
    const sc = arr.reduce(
        (ac, val) => ({ sum: val + ac.sum, count: ac.count + 1 }), { sum: 0, count: 0 }
    )
    return sc.sum / sc.count
}
*/

module.exports = arr => arr.reduce((x, y) => x + y, 0) / arr.length