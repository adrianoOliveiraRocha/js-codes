'use strict';
/* Terminated due to timeout :( */
function migratoryBirds(arr) {

	let response = null;
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
	
	if(Object.keys(repeated).length === 0) { // no repeated		
		let minorId = arr[0];
		arr.forEach(id => {
			if(id < minorId) minorId = id;
		});
		response = minorId;	// minor id	
	} else if(Object.keys(repeated).length === 1) { // one repeated 
		let idsRepeated = Object.keys(repeated);
		response = idsRepeated[0];  
	} else { // more then one repeated
		let frequencies = Object.values(repeated);
		frequencies = frequencies.sort();
		frequencies = frequencies.reverse();
		let majorFrequancie = frequencies[0];
		let moreFrequentyTypes = [];
		Object.keys(repeated).forEach(id => {
			if(repeated[id] == majorFrequancie) {
				moreFrequentyTypes.push(id)
			} 
		})
		if(moreFrequentyTypes.length === 1) {
			response = moreFrequentyTypes[0];
		} else {
			response = moreFrequentyTypes.sort()[0];
		}
		
	}

	return response;

}

console.log(migratoryBirds([1, 1, 2, 2, 3])); // 1
console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // 3


// console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));



