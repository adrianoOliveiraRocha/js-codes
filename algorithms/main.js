'use strict';

Array.prototype.equals = function(arr) {
	
	if(this.length === arr.length) {
		for(let i = 0; i < this.length; i++) {
			if(this[i] != arr[i]) {
				return false;
			}			
		}
		return true;
	} else {
		return false;
	}

}

function howManyWays(size, n, factor) {
	let arr = new Array(size);
	arr.fill(1);
	let x = 0;
	for(let i in arr) {
		x += arr.reverse().pop();
		if(x == factor) {
			arr.push(factor);
			return arr.reverse();
		};
	}
}

function getSum(arr) {
	/* give the result of elements array sum */
	let sum = arr.reduce((acum, curr) => {
		return acum + curr;
	});	
	return sum;
}

function complete(arr, n, factor) {	
	/* complete whit factor until the sum be equals n */
	let sum = getSum(arr);
	while(getSum(arr) < n) {
		arr.push(factor);
	}
}

function main(n, factor) {
	let ways = [];
	let count = 0;
	let size = n - (0 * factor);	
	while(size >= factor) {
		let res = howManyWays(size, n, factor);
		complete(res, n, factor);
		ways.push(res.sort().reverse());
		count++;
		size = n - (count * factor);
	}

	return ways;
	
}

console.log(main(6, 2)); 







