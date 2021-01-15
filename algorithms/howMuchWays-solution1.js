'use strict';
// not perfect
Array.prototype.theSomeArray = function(arr) {
	if(this.length === arr.length) {
		for(let i = 0; i < this.length; i++) {
			if(!arr.includes(this[1])) return false;
			if(!this.includes(arr[i])) return false;			
		}
	 } else {
	 	return false;
	 }
	 return true;
}

function ste2(n) {

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

function step1(n) {
	/*
	One problem:
	fromN doesn't has just two elements. You are working only with fN[0] and fN[1]
	When n is 7, for example, fromN is [ [ 1, 6 ], [ 4, 3 ], [ 5, 2 ], [ 6, 1 ], [ 7 ] ] 
	*/
	const response = [];
	let ways = [];
	let fromN = ste2(n);
	console.log(fromN)
	ways.push(fromN);

	fromN.forEach(fN => {
		ste2(fN[0]).forEach(a => { 
			let arr = [];
			ste2(fN[1]).forEach(b => {
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

function main(n) {
	const res = [];
	step1(n).forEach(el => {
		
		if(res.length === 0) {
			res.push(el);
		} else {
			let exists = false; 
			res.forEach(r => {
				if(r.theSomeArray(el)) exists = true;
			});
			if(!exists) res.push(el);
		}
		
	});

	let withOne = new Array(n);
	withOne.fill(1, 0, n);
	res.push(withOne);
	return res;
}



console.log(main(7).length);

