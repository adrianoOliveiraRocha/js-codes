/*
Example:

function changeSign(a) {
  return -a;
}

function subtract(a, b) {
  b = changeSign(b);
  return a + b;
}

subtract = addLoggin(subtract);
changeSign = addLoggin(changeSign);

subtract(10, 5);

*/

function addLoggin(fn, logger = console.log) {
  return function(...args) {
    logger(`entering ${fn.name}: ${args}`);
    try {
      const valueToReturn = fn(...args);
      logger(`exiting ${fn.name}: ${valueToReturn}`);
      return valueToReturn;
    } catch (e) {
      logger(`Error: ${e}`);
    }
  }
}

module.exports.addLoggin = addLoggin;
