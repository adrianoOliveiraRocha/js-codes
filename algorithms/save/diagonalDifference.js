function diagonalDifference(arr) {
  
  var a = 0;
  var b = 0;
  
  var x = 0;
  var y = (arr.length - 1);  

  for(let i = 0; i < arr.length; i++) {

    for(let j = 0; j < arr[i].length; j++) {
      if(i == j) {
        a += arr[i][j];
      }          

    }
    b += arr[x][y]; 
    x++; 
    y--;  
  }
  
  return Math.abs(a - b);

}
