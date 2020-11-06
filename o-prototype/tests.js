function foo() {
  setTimeout(() => {
    console.log(this.a);
  }, 10000);
}

var obj = {a: 2};

foo.call(obj);