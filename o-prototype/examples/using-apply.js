function foo(num) {
  console.log("foo: " + num);
  this.count++;
}

foo.count = 0;

for(let i = 0; i < 10; i++) {
  if(i < 5) {
    foo.apply(foo, [i]);
  }
}

console.log(foo.count);