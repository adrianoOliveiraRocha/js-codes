'use strict';
const res = {}

function waysAcordingThefactor(factor, n) {
	// console.log(factor, n);
	let ways=[]
	
	for(let i=1; i<n; i++) {
		let way = new Array(i);
		way.fill(factor, 0, i)				
		
		let sum = way.reduce((accum, current) => accum + current);
				
		if(sum <= n) {
			while(sum < n) {
				sum+=1;
				way.push(1);
			}
		}
		
		// console.log(way)
		if(sum == n) ways.push(way);		
		else if(sum > 5) break;

	}
	
	console.log(ways.join("\n"));
	res[factor] = ways;
	
	let newn = n - factor;
	let newfactor = factor - 1;
	if(newn > 1 && newfactor > 1 ) {
		res[factor] = waysAcordingThefactor(newfactor, newn);
		console.log(factor.toString() + ",")
		waysAcordingThefactor(newfactor, newn);
	}

}


waysAcordingThefactor(5, 5);
waysAcordingThefactor(4, 5);
waysAcordingThefactor(3, 5);
waysAcordingThefactor(2, 5);
waysAcordingThefactor(1, 5);

console.log(res)



