/*

Example 1:

function mult(a, b) {
  return a * b;
}

const result = addTiming(mult)(2, 2);
console.log(result);

*/

function myPut(text, name, tStart, tEnd) {
  console.log(`${name} - ${text} - ${tEnd - tStart} ms`);
}

function myGet() {
  return new Date();
}

function addTiming(fn, getTime = myGet, output = myPut) {
  return function(...args) {
    let tStart = getTime();
    try {
      const valueToReturn = fn(...args);
      output("normal exit", fn.name, tStart, getTime());
      return valueToReturn;
    } catch (e) {
      output("exception throw", fn.name, tStart, getTime());
      throw e;
    }
  }
}

module.exports = addTiming;
