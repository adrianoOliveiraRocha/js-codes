var params = ["hello", true, 7];
var others = [1, 2, ...params];

function f(x, y, ...a) {
  return (x + y) * params.length;
}

console.log(f(1, 3, ...params) === 12);
