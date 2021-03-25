'strict'

function GCD(n1, n2, divisor=2) {

  // let major = (n1 > n2 ? n1 : n2);
  if(n1 % divisor !== 0 && n2 % divisor !== 0 && n1 > 1 && n2 > 1) {
    GCD(n1, n2, (divisor + 1));
  } else if(n1 % divisor === 0 && n2 % divisor !== 0 && n1 > 1 && n2 > 1) {
    GCD((n1 / divisor), n2, (divisor));
  }  else if(n1 % divisor !== 0 && n2 % divisor === 0 && n1 > 1 && n2 > 1) {
    GCD(n1, (n2 / divisor), (divisor));
  } else {
    console.log(n1 % divisor);
  }
}

GCD(60, 24);
