// console.log("returned ", noisy(Math.min)(3, 2, 1));

function noisy(f) {
  return (...args) => {
    console.log("calling with ", args);
    let result = f(...args);
    console.log("called with", args);
    return result;
  };
}

module.exports = noisy;



