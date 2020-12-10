'use strict';

function migratoryBirds(arr) {
	// console.log(arr.sort().reverse()[0]);
	arr = arr.sort();
	for(let i=0; i < arr.length; i++) {
		console.log(arr[i]);
	}

	return null;
}

console.log(migratoryBirds([4, 1, 1, 1, 2, 2, 3]));

// console.log(migratoryBirds([4, 1, 1, 2, 2, 3])); // 1
// console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
// console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // 3


