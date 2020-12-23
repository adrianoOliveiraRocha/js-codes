'use strict';

function waysAcordingThefactor(factor, n, res={}) {
	
	let ways=[]
	if(factor === 1) {
		let way = new Array(n);
		way.fill(1, 0, (n + 1));
		ways.push(way);
	} else {

		for(let i=1; i<n; i++) {
			let way = new Array(i);
			way.fill(factor, 0, i);				
			
			let sum = way.reduce((accum, current) => accum + current);
					
			if(sum <= n) {
				while(sum < n) {
					sum+=1;
					way.push(1);
				}
			}
			
			if(sum == n) {
				ways.push(way);
			}		
			else if(sum > n) break;

		}
	}
		
	res[factor] = ways;
	
	let newn = n - factor;
	let newfactor = factor - 1;
	if(newn > 1 && newfactor > 1 ) {
		waysAcordingThefactor(newfactor, newn);
	}

}

function howManyWays(n) {
	const res = {};
	
	for(let i = n; i >= 1; i--) {
		waysAcordingThefactor(i, n, res);
	}

	Object.keys(res).forEach((f) => {
		console.log(f);
		res[f].forEach(el => {
			console.log(el)
		})
	})

	// console.log(res);

}


howManyWays(7);

// let res={}
// waysAcordingThefactor(2, 3, res={})
// console.log(res);



