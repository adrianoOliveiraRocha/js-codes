'use strict';

/*

You have been asked to help study the population of birds migrating 
across the continent. Each type of bird you are interested in will be 
identified by an integer value. Each time a particular kind of bird 
is spotted, its id number will be added to your array of sightings. 
You would like to be able to find out which type of bird is most 
common given a list of sightings. Your task is to print the type 
number of that bird and if two or more types of birds are equally 
common, choose the type with the smallest ID number.

*/

function migratoryBirds(arr) {
	let repeated = {};
	var temp = [];
	
	arr.forEach(x => {
		var quantity = 0;
		arr.forEach(y => {
			if(x == y && temp.includes(y)) {
				quantity++;
				repeated[x] = quantity;
			}
		});	
		temp.push(x);	
	});

	var majorFrequency = Object.values(repeated).sort().reverse()[0];
	var idsWithMajorFrequency = Object.keys(repeated).sort().filter(id => {
		if(repeated[id] == majorFrequency) return repeated[id];
	})
	
	return idsWithMajorFrequency.sort()[0];

}

console.log(migratoryBirds([1, 2, 2, 3])); // 2
console.log(migratoryBirds([1, 1, 2, 2, 3])); // 1
console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // 3


