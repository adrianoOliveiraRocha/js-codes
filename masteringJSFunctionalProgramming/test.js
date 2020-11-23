function fib(n) {
  if(n == 0) {
    return 0
  } else if(n == 1) {
    return 1;
  } else {
    console.log(`${n - 2} + ${n - 1} = ${(n -2) + (n - 1)}`);
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(5));
