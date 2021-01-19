/*
Given the value n, find, if any, 3 consecutive even numbers whose sum is equal to n.
*/

function resolve(n) {
	
	for (let i = 0; (i + (i + 1) + (i + 4)) < n; i++) {
		if(i % 2 === 0) {
			if(i + (i + 2) + (i + 4) === n) return [i, (i + 2), (i + 4)];
		}
	}
	return false;
}

let response = resolve(18);
response ? console.log(response) : console.log("Doesn't exists");




