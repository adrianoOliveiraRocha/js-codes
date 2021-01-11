// Example 0
const nosense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`
const fix2and5 = (a, c, d) => nosense(a, 22, c, d, 1960)
const fixLast = (a, c) => fix2and5(a, c, 9)
const result = fixLast(1, 2)
console.log(result)

