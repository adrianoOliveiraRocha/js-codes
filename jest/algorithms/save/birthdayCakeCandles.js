function birthdayCakeCandles(candles) {
  var max = candles[0];
  candles.forEach(el => {
    if(el > max) max = el;
  });    
  var count = 0;
  candles.forEach(el => {
    if(el == max) count++;
  })    
  return count;

}
