'use strict';

function elementsSum(arr) {
	return arr.reduce((acum, curr) => acum + curr);
}

function complete(arr) {
	let sum = elementsSum(arr);
	while(sum < n) {
		arr.push(1);
		let sum = elementsSum(arr);
	} 
	return arr;
}

function main(n) {
	let ways = [];

	for(let i = 1; i <= n; i++) {
		let way = [];
		let dividendo = parseInt(n / i);
		let remain = n % i;	

		if(i + remain == 5) {
			way.push(i); way.push(remain);
			ways.push(way);
		} else if(i + remain < 5) {
			ways.push(complete([i, remain], n));
		}

		if(i + dividendo == 5) {
			way.push(i); way.push(dividendo);
			ways.push(way);
		} else if(i + dividendo < 5) {
			ways.push(complete([i, dividendo], n));
		}
	}

	console.log(ways);

}

main(5);
