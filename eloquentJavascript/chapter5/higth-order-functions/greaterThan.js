/*
const greaterThan10 = greaterThan(10);
console.log(greaterThan10(2));
console.log(greaterThan10(12));

const greaterThen20 = greaterThan(20);
console.log(greaterThen20(5));
console.log(greaterThen20(24));
*/

function greaterThan(n) {
	return function(m) {
	  return m > n ? true : false;
	} 
}

module.exports = greaterThan;
