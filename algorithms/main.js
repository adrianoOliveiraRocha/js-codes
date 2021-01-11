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
	return mySum;
}

function complete(arr, n) {
	console.log(`${arr}`);
	let sum = elementsSum(arr);
	while(sum < n) {
		arr.push(1);
		sum = elementsSum(arr);
	}	
	console.log(arr);
	return arr;

}

function main(n) {

	let ways = [];
	let toFix = [];

	for(let i = 1; i <= n; i++) {
		let way = [];
		let result = parseInt(n / i);
		let remain = n % i;	

		if(i + remain == n) {
			way.push(i); 
			if (remain !== 0) way.push(remain);
			ways.push(way);
		} else if(i + remain < n) {
			let arr = []; arr.push(i);
			if(remain !== 0) arr.push(remain);
			toFix.push(arr)
		}

		if(i + result == n) {
			if(result !== remain) {
				way.push(i); way.push(result);
				ways.push(way);
			}
		} else if(i + result < n) {
			toFix.push([i, result]);
		} else if(i + result > n) {
			let arr = [];
			if((result-i) > 0) {
				let arr = [1, (result-i) > 0 ? (result-i) : null];
				ways.push(arr);
			}			
			
		}
	}
	// console.log(toFix);
	console.log("\n")
	return ways;

}

let ways = []
ways.push(main(5)); // [ [ 1, 4 ], {[ 3, 2 ]}, [ 4, 1 ], [ 5 ] ]

let comesFrom3 = main(3); 
let comesFrom2 = main(2);
comesFrom3.forEach(cf3 => {
	comesFrom2.forEach(cf2 => {
		let arr = []
		arr.push(cf3)
		arr.push(cf2)
		ways.push(arr)
	})
});

console.log(ways)

