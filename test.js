var a = [4, 2, 3];
var b = [6, 6, 1];

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  var alicePoints = 0;
  var bobPoints = 0;
  
  for(let i = 0; i < a.length; i++) {
  	console.log(a[i]);
  	console.log(b[i]);

    if(a[i] > b[i]) {
        alicePoints += 1;
    } else if(b[i] > a[i]) {
        bobPoints += 1;
    }
  }

  return [alicePoints, bobPoints];

}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));