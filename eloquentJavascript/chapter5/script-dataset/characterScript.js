const SCRIPTS = require('./../data-sources/scripts.js'); 
console.log(characterScript(SCRIPTS, 121));

function characterScript(dataSet, code) {
  for(let data of dataSet) {
    if(data.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return data;
    }
  }
  return null;
}

module.exports = characterScript;




