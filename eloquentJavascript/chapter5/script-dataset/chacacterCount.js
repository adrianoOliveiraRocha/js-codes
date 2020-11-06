/*
const SCRIPTS = require('./../data-sources/scripts.js');
let test = SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
});
console.log(test);
*/

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

module.exports = characterCount;


