'use strict';
/*
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
*/

Array.prototype.someElements = function(arr) {
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
	
	if(res.length === 0) {
		res.push(el);
	} else {
		let exists = false; 
		res.forEach(r => {
			if(r.someElements(el)) exists = true;
		});
		if(!exists) res.push(el);
	}
	
})

console.log(res);

