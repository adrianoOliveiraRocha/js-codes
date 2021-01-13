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

function main(n) {

	let ways = [];

	for(let i = 1; i <= n; i++) {
		let way = [];
		let result = parseInt(n / i);
		let remain = n % i;	

		if(i + remain == n) {
			way.push(i); 
			if (remain !== 0) way.push(remain);
			ways.push(way);
		} 

		if(i + result == n) {
			if(result !== remain) {
				way.push(i); 
				way.push(result);
				ways.push(way);
			}
		} else if(i + result > n) {
			let arr = [];
			if((result-i) > 0) {
				let arr = [1, (result-i) > 0 ? (result-i) : null];
				ways.push(arr);
			}			
			
		}
	}

	return ways;

}

function init(n) {
	const response = [];
	let ways = [];
	let fromN = main(n);
	ways.push(fromN);

	fromN.forEach(fN => {
		main(fN[0]).forEach(a => { 
			let arr = [];
			main(fN[1]).forEach(b => {
				arr.push([a, b]);
			})
			ways.push(arr);
		})

	})

	ways.forEach(el => {
		el.forEach(way => {
			response.push(way.flat())
		})
	});

	return response;

}

const res = [];
init(5).forEach(el => {
	/*
	el =>
	[ 1, 4 ]
	[ 3, 2 ]
	[ 4, 1 ]
	[ 5 ]
	[ 1, 1, 3 ]
	[ 1, 2, 2 ]
	[ 1, 3, 1 ]
	[ 1, 4 ]
	[ 1, 2, 1, 1 ]
	[ 1, 2, 2 ]
	[ 2, 1, 1, 1 ]
	[ 2, 1, 2 ]
	[ 3, 1, 1 ]
	[ 3, 2 ]
	[ 1, 3, 1 ]
	[ 2, 2, 1 ]
	[ 3, 1, 1 ]
	[ 4, 1 ]
	*/
	res.forEach(r => {
		// if el was different of all elements from res, push it in the res
	})
})

console.log(res);

