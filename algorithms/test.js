'use strict';

function waysAcordingThefactor(factor, n) {

	let ways=[]
	
	for(let i=1; i<n; i++) {
		let way = new Array(i);
		way.fill(factor, 0, i)				
		// ways.push(way);
		let sum = way.reduce((accum, current) => accum + current);
		let temp=sum;
		
		if(sum <= n) {
			while(sum < n) {
				sum+=1;
				way.push(1);
			}

		}
		
		if(sum == n) ways.push(way)

	}

	console.log(ways)

}
console.log("factor = 2; n = 10")
test(2, 10);
console.log("factor = 3; n = 12")
test(3, 12);
