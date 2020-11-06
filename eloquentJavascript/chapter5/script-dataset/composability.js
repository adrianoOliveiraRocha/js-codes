const SCRIPTS = require('./../data-sources/scripts.js'); 
const characterCount = require('./chacacterCount.js');

/*
let biggest = null;
for(let script of SCRIPTS) {
  if(biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;    
  }
}

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

const livingTrue = Math.round(average(SCRIPTS
  .filter(s => s.living)
  .map(s => s.year)));
console.log(livingTrue); // 1165

const livingFalse = Math.round(average(SCRIPTS
  .filter(s => !s.living)
  .map(s => s.year)));
console.log(livingFalse); // 204


This approach is more readding but take a long
let total = 0; count = 0;
for(let script of SCRIPTS) {
  if(script.living) {
    total += script.year;
    count += 1;
  }
}

let res = Math.round(total / count);
console.log(res);

*/

