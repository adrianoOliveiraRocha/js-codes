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

function elementsSum(arr) {
	let mySum = arr.reduce((acum, curr) => acum + curr);
	return mySum
}

function complete(arr, n) {
	console.log(`arr: ${arr}; n: ${n}`)

	let sum = elementsSum(arr);
	console.log(`sum: ${sum}`)
	
	arr.push(1)

	console.log(`arr: ${arr}, n: ${n}`)

	sum = elementsSum(arr);
	console.log(`sum: ${sum}`)
	
	// console.log(arr);
}

function main(n) {
	let ways = [];

	for(let i = 1; i <= n; i++) {
		let way = [];
		let result = parseInt(n / i);
		let remain = n % i;	

		if(i + remain == 5) {
			way.push(i); 
			if (remain !== 0) way.push(remain);
			ways.push(way);
		} else if(i + remain < 5) {
			// console.log(i, remain)
			let arr = []; arr.push(i);
			if(remain !== 0) arr.push(remain);
			complete(arr, n)
		}

		if(i + result == 5) {
			if(result !== remain) {
				way.push(i); way.push(result);
				ways.push(way);
			}
		} else if(i + result < 5) {
			// console.log(i, result)
			complete([i, result], n)
		}
	}

	console.log(ways);

}

main(5);

