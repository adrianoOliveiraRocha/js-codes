function miniMaxSum(arr) {
  var total = arr.reduce((acum, item) => {
    return acum + item;
  });
  
  var min = arr[0];
  var max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) min = arr[i];
    if(arr[i] > max) max = arr[i];
      
  }
  var minSum = total - max;
  var maxSum = total - min;
  console.log(minSum, maxSum);

}
