/*

Ex1:
const toUpperCase = demethodize(String.prototype.toUpperCase)
const map = demethodize(Array.prototype.map)

const name = "FUNCTIONAL"
const result = map(name, toUpperCase)
console.log(result)

Ex2:
const toLocaleDateString = demethodize(Number.prototype.toLocaleString)

const numbers = [2209.6, 124.56, 1048576]
const strings = numbers.map((item) => {
	return toLocaleDateString(item)
})
console.log(strings)

*/

module.exports = fn => (...args) => fn.bind(...args)()
