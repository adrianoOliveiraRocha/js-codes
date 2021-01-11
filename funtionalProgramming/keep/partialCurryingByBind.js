/*
// Example 1
const make3 = (a, b, c) => String(100 * a + 10 * b + c);
const f1 = partialCurryingByBind(make3)
const f2 = f1(6, 5) // it fixes the firts two arguments. fn.length = 1
const f3 = f2(8) // "658" is calculated, since there are no more parameters to fix

// Example 2
const g1 = partialCurryingByBind(make3)(8, 7)
const g2 = g1(6)
 
*/

const partialCurryingByBind = fn =>
	fn.length === 0
		? fn()
		: (...p) => partialCurryingByBind(fn.bind(null, ...p))
	
module.exports = partialCurryingByBind