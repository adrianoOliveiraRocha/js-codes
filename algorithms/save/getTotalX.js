'use strict';

function getTotalX(a, b) {

	var initN = (function() {
		var maxA = a[0];
	  for (var el of a) {
			if(el > maxA) maxA = el;
		} 
		return maxA;
	})();

	var endN = (function() {
		var maxB = b[0];
	  for (var el of b) {
			if(el > maxB) maxB = el;
		} 
		return maxB;
	})();

	var x = []; 
	for(let n = initN; n <= endN; n++) {
		var howMachN = 0;
		a.forEach(el => {
			if(n % el==0) {
				howMachN ++;
			}
		}); 
		if(howMachN == a.length) x.push(n);
	}

	var y = []; 
	x.forEach(n => {
		var howMuchN = 0;
		b.forEach(el => {
			if(el % n == 0) howMuchN ++;
		});
		if(howMuchN == b.length) y.push(n); 
	});

	return y.length;
	
}


console.log(getTotalX([2, 4], [16, 32, 96]));
console.log(getTotalX([2, 6], [24, 36]));

