'strict'

function LinearCongruencialGenerator(n) {
  // result = Min + number Mod (Max – Min + 1)
  let min = 1; max = 100;
  return 1 + n % (max - min + 1); 
}

module.exports = LinearCongruencialGenerator;