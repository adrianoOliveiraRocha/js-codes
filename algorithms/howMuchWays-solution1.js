'use strict';

Array.prototype.equals = function(arr) {
	if(this.length === arr.length) {
		for(let i = 0; i < this.length; i++) {
			if(this[i] !== arr[i]) {
				return false;
			}
		}
	} else {
		return false;
	}
	return true;
}

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

Array.prototype.completeWithOne = function(s, n) {
	while(s < n) {
		this.push(1);
		s = this.reduce((acum, curr) => acum + curr);
	}
	return this;
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
			if((result - i) > 0) {
				let arr = [1, (result - i) > 0 ? (result - i) : null];
				ways.push(arr);
			}					
		} else {
			ways.push([i, result])
		}

	}

	return ways;

}

function step1(n) {
	const response = [];
	let ways = [];
	let fromN = ste2(n);
	ways.push(fromN);

	fromN.forEach(fN => {
		
		ste2(fN[0]).forEach(a => { 
			let arr = [];
			ste2(fN[1]).forEach(b => {
				arr.push([a, b]);
			});
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
	res.push([n]);
	let aone = new Array(n);
	aone.fill(1, 0);
	res.push(aone);
	step1(n).forEach(el => {

		if(res.length === 0) {
			res.push(el);
		} else {
			/*
			now, you have some arrays in with the sum of the elments is less then n. In this cases, you should
			complete the array with one
			*/
			const s = el.reduce((acum, curr) => acum + curr);
			if(s < n) {
				// console.log("el sum is less then n: ", el);
				el = el.completeWithOne(s, n);
			}

			let exists = false; 
			res.forEach(r => {
				if(r.theSomeArray(el) || r.equals(el)) exists = true;
			});
			if(!exists) res.push(el);
		}
		
	});
	
	return res;
}

console.log(main(8));
console.log(main(8).length);

