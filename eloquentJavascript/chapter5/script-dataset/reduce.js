/*
let res = reduce([1, 2, 3, 4], (a, b) => a + b, 0);
console.log(res);
*/

function reduce(array, combine, start){
  let current = start;
  for(let element of array) {
    current = combine(current, element);
  }
  return current;
}

module.exports = reduce;


