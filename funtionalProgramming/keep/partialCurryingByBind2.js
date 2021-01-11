/*
Example:
const sum2 = (...args) => args.reduce((x, y) => x + y, 0);
const pcSum5 = partialCurryingByBind2(sum2, 5)
let result = pcSum5(1, 5)(3)(7, 4)
console.log(result)
 */

const partialCurryingByBind2 = (fn, len = fn.length) =>
	len === 0
		? fn()
		: (...p) =>
				partialCurryingByBind2(
					fn.bind(null, ...p),
					len - p.length
				)

module.exports = partialCurryingByBind2