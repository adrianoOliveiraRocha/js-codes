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

function getSum(arr) {
	/* give the result of elements array sum */
	let sum = arr.reduce((acum, curr) => {
		return acum + curr;
	});	
	return sum;
}

function complete(arr, n, factor) {	
	/* complete whit factor until the sum to be equals n */
	if(typeof arr != "undefined") {
		let sum = getSum(arr);
	
		while(getSum(arr) < n) {
			arr.push(factor);
		}
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

function main(n, factor) {
	let ways = [];
	let count = 0;
	let size = n - (count * factor);	

	while(size >= factor) {
		let res = howManyWays(size, n, factor);
		complete(res, n, factor);
		if(typeof res != "undefined") ways.push(res.sort().reverse());
		count++;
		size = n - (count * factor);
	}

	return ways;
	
}

function start(n) {
	let factor = 2;
	let ways = [];

	if(n > 2) {
		while(factor < n) {
			let w = main(n, factor);
			if (w.length > 0) ways.push(w);
			factor++;
		}
	}	else if(n === 2) {
		ways.push([2]);
	}
	
	return ways;

}

// console.log(start(2))

function test(n) {
	let res = start(n);

	res.forEach(ways => {
		ways.forEach(way => {
			let keep = way.filter(e => e != 1);
			let ones = way.filter(e => e == 1);
			console.log(keep, ones);
			console.log(start(ones.length)) 	
			console.log("\n");		
		})
	})

	console.log("\n");
	return res;
	/*
	When you have more the algarism 1 more then one time and the factor 
	is grather then two, you need look for more ways
	*/
}

test(7)

