Array.prototype.isDiferrent = function(arr) {
  console.log('test');
  this.forEach(el => {
    console.log(el[0] === arr[0] || el[1] === arr[0]);
    console.log(el[1] === arr[0] || el[1] === arr[1]);
    console.log("\n");
  })
}

let res = [[1, 2], [3, 4], [8,7], [9, 6]];
console.log(res.isDiferrent([1, 2]));

let arr = [2, 3, 1, 5, 6, 8, 2, 77, 4];
let s = 12;

function twoSum(arr, s) {
  let res = [];
  arr.forEach(i => {
    arr.forEach(j => {
      // console.log(i, j);
      if(i + j === s && res.isDiferrent([i, j])) {
        res.push([i, j]);      
      }
    })
  });
  return res;
}

// console.log(twoSum(arr, s));

