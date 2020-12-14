'use strict';

/*

How many ways does we can represent a number?

example:

n = 10

// farores 1 2 3 4 5 6 7 8 9

// só com 1
// 1 1 1 1 1 1 1 1 1 1

// 1 e 2
// 2 1 1 1 1 1 1 1 1
// 2 2 1 1 1 1 1 1
// 2 2 2 1 1 1 1
// 2 2 2 2 1 1
// 2 2 2 2 2

// 1 2 e 3
// 3 1 1 1 1 1 1 1
// 3 2 1 1 1 1 1
// 3 2 2 1 1 1 1
// 3 2 2 2 1
// 3 3 1 1 1 1
// 3 3 2 1 1
// 3 3 2 2
// 3 3 3 1

// 1 2 3 e 4
// 4 1 1 1 1 1 1
// 4 2 1 1 1 1
// 4 2 2 1 1
// 4 2 2 2
// 4 3 1 1 1
// 4 3 2 1
// 4 3 3
// 4 4 1 1
// 4 4 2

// 1 2 3 4 and 5
// 5 1 1 1 1 1 
// 5 2 1 1 1 
// 5 2 2 1 
// 5 3 1 1
// 5 3 2
// 5 4 1
// 5 5

and so on...

*/



function howManyWays(n) {
	
	let sequences = []; 
	for(let i=1; i<n; i++) {
		let temp=[];
		for(let j=i; j>0; j--) {
			temp.push(j)
		}
		sequences.push(temp.sort());
	}
	// console.log(sequences);
	let ways=[];
	sequences.forEach(sequence => {
		let lastFactor = sequence[sequence.length-1];
		for(let i = 1; i <= sequence.length; i++) {
			let way = new Array(i);
			way.fill(lastFactor, 0, i);
			ways.push(way);
		}

	});
	
	console.log(ways);

}

howManyWays(5);
