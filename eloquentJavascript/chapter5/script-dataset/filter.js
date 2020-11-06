/*
var SCRIPTS = require('./../data-sources/scripts.js'); 

const result = filter(SCRIPTS, script => script.living);
console.log(result);
*/

function filter(array, test) {
  let passed = [];
  for(let element of array) {
    if(test(element)) {
      passed.push(element);  
    }
  }
  return passed;
}

module.exports = filter;
