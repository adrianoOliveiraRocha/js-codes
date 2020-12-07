'use strict';

function divisibleSumPairs(n, k, ar) {
	let results = [];
	for(let i = 0; i <= n; i++) {
		if((i + 1) < n) {
			for(let j = (i + 1); j < n; j++) {
				if((ar[i] + ar[j]) % k == 0) results.push([ar[i], ar[j]]);
			}
		}
	}
	return results.length;
}

console.log(divisibleSumPairs([1, 2, 3, 4, 5, 6].length, 5, [1, 2, 3, 4, 5, 6]));
console.log(divisibleSumPairs([1, 3, 2, 6, 1, 2].length, 3, [1, 3, 2, 6, 1, 2]));
