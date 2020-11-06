/*
const repeat = require('./../abstration/repeat.js');

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

*/

function unless(test, then) {
  if(!test) then();
}

module.exports = unless;


