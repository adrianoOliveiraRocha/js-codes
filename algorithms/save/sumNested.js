let arr = [1, 1, 1, [3, 4, [8]], [5]];

function sumNested(arr) {
  let res = 0;
  arr.forEach(element => {
    if(typeof element === 'number') res += element;
    else res += sumNested(element);
  });
  return res;
}

console.log(sumNested(arr));