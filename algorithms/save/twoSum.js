function twoSum(arr, s) {
  let response = false;
  arr.forEach(element => {
    let rest = s - element;
    if(arr.includes(rest)) {
      response = true;
    }
  });
  return response;
}

let arr = [2, 3, 1, 5, 6, 8, 2, 77, 4];
let s = 12;
console.log(twoSum(arr, 12));