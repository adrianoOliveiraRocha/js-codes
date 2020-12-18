'use strict';

function waysAcordingThefactor(factor, n) {
	let ways=[]
	// let keep = []
	for(let i=1; i<n; i++) {
		let way = new Array(i);
		way.fill(factor, 0, i)				
		// ways.push(way);
		let sum = way.reduce((accum, current) => accum + current);
				
		if(sum <= n) {
			while(sum < n) {
				sum+=1;
				way.push(1);
				// console.log(way)
			}
		}
		
		if(sum == n) ways.push(way)		

	}
	
	let next = ways[0].slice(1, -1);
	console.log("\n next");
	console.log(next);

	return ways;

}

console.log(waysAcordingThefactor(4, 12))
