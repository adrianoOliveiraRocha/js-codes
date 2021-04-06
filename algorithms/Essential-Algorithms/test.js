'strict'

function raiseToPower(a, p) {
  let r = 1;
  for(let i = 1; i <= p; i++) {
    r = r * a;
  }
  console.log(r);
}

raiseToPower(2, 5);