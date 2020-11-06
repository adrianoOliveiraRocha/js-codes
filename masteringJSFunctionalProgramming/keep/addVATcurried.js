/*
function addVATcurried(rate) {
  return function(amount) {
    return amount * (1 + rate / 100);
  }
};

const addNationalVAT = addVATcurried(6);
console.log(addNationalVAT(1500))
*/

function addVATcurried(rate) {
  return function(amount) {
    return amount * (1 + rate / 100);
  }
};

module.exports = addVATcurried