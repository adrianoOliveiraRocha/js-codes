function c(arr) {  
  
  var a = 0;
  var b = 0;
  
  var x = 0;
  var y = (arr.length - 1);  

  for(let i = 0; i < arr.length; i++) {

    for(let j = 0; j < arr[i].length; j++) {
      //console.log(i++);
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

arr = [
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12]
]

console.log(c(arr))
