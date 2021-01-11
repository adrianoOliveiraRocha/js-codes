const addTiming = require('./keep/addTiming');
const memoize = require('./keep/memoize.js');
const fib = require('./keep/fib');

function memoize2(fn) {
  let cache = {};
  return function(x) {
    if (fn.length === 1) {
      return (x in cache ? cache[x] : (cache[x] = fn(x)));
    } else {
      return fn;
    }
  }
}


const fibMemoized = memoize2(fib);
console.log('Using fib');
addTiming(fib)(44);
console.log("\n");
console.log('Using memoized fib');
addTiming(fibMemoized)(44);
