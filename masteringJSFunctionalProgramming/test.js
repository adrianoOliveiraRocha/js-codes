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

function mult(a, arr) {
  let result = 0;
  arr.forEach((item, i) => {
    result += item * i;
  });
  return result
}

const result = addTiming(mult)(778, [7, 8, 9, 9, 5, 5, 5]);
console.log(result);
