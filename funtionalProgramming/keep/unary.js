/*
Example:
["123.45", "-67.8", "90"].map(unary(parseInt))
*/
module.exports = fn => (...args) => fn(args[0])