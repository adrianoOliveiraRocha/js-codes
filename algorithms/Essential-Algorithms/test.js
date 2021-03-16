'strict'

/*
In a ballot box there are 50 cards numbered from 1 to 50. One card is
taken at random. Determine the likelihood that the number of the
card:
a) is a cousin;
b) end with the digit 7.
*/

function letsGo() {
  let cousin = [], sevenDigit = [];

  for(let i = 1; i <= 50; i++) {
    if(i % 2 != 0) cousin.push(i); 
    let t = JSON.stringify(i);
    if(t.length === 1 & t[0] === '7') sevenDigit.push(i);
    if(t.length === 2 & t[1] === '7') sevenDigit.push(i);
  }

  return [`${(cousin.length / 50) * 100}%; ${(sevenDigit.length / 50) * 100}%`];
}

console.log(letsGo());
