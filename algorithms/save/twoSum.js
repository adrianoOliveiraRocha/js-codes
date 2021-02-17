function twoSum(arr, S) {
  
  let hashTable = {};

  for(let i = 0; i < arr.length; i++) {
    let sumMinusElement = S - arr[i];

    if(hashTable[sumMinusElement] !== undefined) {
      return true;
    }
  
    hashTable[arr[i]] = true;
  }

  return false;
 
}

let arr = [2, 3, 1, 5, 6, 8, 2, 77, 4];
let s = 12;
console.log(twoSum(arr, 12));