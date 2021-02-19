function twoSum(arr, s) {
  let hashTable = {};
  
  for(let i = 0; i < arr.length; i++) {
    let rest = s - arr[i];
    if(hashTable[rest] !== undefined) return true;
    hashTable[rest] = true;
  }
  
}

let arr = [2, 3, 1, 5, 6, 8, 2, 77, 4];
let s = 12;
console.log(twoSum(arr, 12));