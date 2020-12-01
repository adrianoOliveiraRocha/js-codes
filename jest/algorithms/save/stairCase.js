function staircase(n) {
  for(let i = 1; i <= n; i++) {
    var spaces = " ".repeat(n-i);
    console.log(spaces + "#".repeat(i));
  }
}
