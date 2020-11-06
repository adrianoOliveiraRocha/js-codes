/*
const SCRIPTS = require('./../data-sources/scripts.js'); 

let rtlScripts = SCRIPTS.filter(s => s.direction == 'rtl');

let result = map(rtlScripts, s => s.name);
console.log(result);
*/

function map(array, transform) {
  let mapped = [];
  for(let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

module.exports = map;


