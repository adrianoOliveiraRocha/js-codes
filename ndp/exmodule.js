// module.exports = {
//   square (x) {
//     return x * x;
//   }, 
//   cube (x) {
//     return x * x * x;
//   }
// }

module.exports.square = function (x) {
  return x * x;
}

module.exports.cube = function (x) {
  return x * x * x;
}

function nothing () {
  return 'this function is unusefull';
}

module.exports.nothing = nothing;
