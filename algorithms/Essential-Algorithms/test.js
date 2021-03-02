function ContainsDuplicates(arr) {
  // console.log(arr.length - 1);
	for(i = 0; i < (arr.length - 1); i++) { // O(N)
		for(let j = (i + 1); j < arr.length; j++) { // O(N)
			if(arr[i] == arr[j]) return true; // O(1)
		}
	} 
	return false;
}	

arr1 = [1, 2, 3, 4, 5, 1];
console.log(ContainsDuplicates(arr1));