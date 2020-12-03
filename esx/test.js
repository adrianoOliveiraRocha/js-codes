function f1(n) {
  var v1 = n;
  function f2() {
    return n * 2;
  }
  return f2();
}

console.log(f1(2));