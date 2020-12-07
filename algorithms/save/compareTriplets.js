function compareTriplets(a, b) {
  var alicePoints = 0;
  var bobPoints = 0;
  
  for(let i = 0; i < a.length; i++) {
    if(a[i] > b[i]) {
      alicePoints += 1;
    } else if(b[i] > a[i]) {
      bobPoints += 1;
    }
  }
  return [alicePoints, bobPoints];
}
