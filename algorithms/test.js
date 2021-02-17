Array.prototype.exists = function(arr) {  
  let result = false;
  this.forEach(el => {
    result = el.includes(arr[0]) && el.includes(arr[1]) ? true : false;
  })
  return result;
}

function twoSum(arr, s) {
  let res = [];
  arr.forEach(i => {
    arr.forEach(j => {
      if(i + j === s && !res.exists([i, j])) {
        res.push([i, j]);      
      }
    })
  });
  return res;
}

let arr = [2, 3, 1, 5, 6, 8, 2, 77, 4];
let s = 12;
console.log(twoSum(arr, 12));

