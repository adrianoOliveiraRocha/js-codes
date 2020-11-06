function foo(something) {
  this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1);

bar(2); // It has this effect: obj1.foo(2). But obj1 hasn't the function foo
console.log(obj1);
console.log(obj1.a);
bar(3); //obj1.foo(3);
console.log(obj1);
console.log(obj1.a);