'strict'

/*
There’s a faster way to perform this kind of operation. This method
is based on two key facts about exponentiation:
■ A 2 × M = (A M ) 2
■ A M+N = A M × A N
*/

function raiseToPower(a, p) {
  let r = 1;
  if(p > 2) {
    for(let i = 2; i < p; i=i+2) {
      r = r * Math.pow(a, i);
    }
  }  
  return r;
}

console.log(raiseToPower(7, 6));