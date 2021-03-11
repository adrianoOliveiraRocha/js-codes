'strict'

function pseudoRandom(n) {
  /**
   * Xn+1 = (a * Xn + b) mod m
   * Xo = 0;
   * a = 7;
   * b = 5;
   * m = 11;
   */
  let a = 7, b = 5, m = 11;
  var rn = 0; // Xo = 0;
  for(let i = 1; i <= n; i++) {
    console.log(rn);
    rn = ((a * rn) + b) % m; 
  }

  // result = 1 + number Mod (100 – 1 + 1)
  
  return rn;
}

console.log(pseudoRandom(10));

// Ensuring Fairness
