'use strict';

function getMore(...ar) {
	let arr = ar[0];
	let constantValues = [];
	let next = 0;
	while(arr[next] > 1) {
		constantValues.push(arr[next]);
		next++;
	};
	// console.log(constantValues);
	let newArray = arr.filter(item => {
		if(item in constantValues) return item;
	});
	console.log(constantValues);
	console.log(newArray); // waysAcordingThefactor(2, newArray.length, res={})
}

let arr = [ 3, 3, 1, 1, 1, 1 ]
getMore(arr)


/*
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
		res[f].forEach(el => {
			if(f > 2 && el.slice(1, el.length).length > 1) {
				console.log('verify ')
				console.log(el)
			} else {
				console.log('not verify ')
				console.log(el)
			}
		})
	})

	// console.log(res);

}


// howManyWays(7);



*/

