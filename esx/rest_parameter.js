
class Test {

  constructor(x, y, ...a) {
    this.x = x;
    this.y = y,
      this.a = a;
  }

  test() {
    this.a.forEach(x => {
      console.log(x);
    });

    return (this.x + this.y) * this.a.length;
  }

}

test = new Test(10, 20, 34, 54, 25, 65);
resp = test.test();
console.log(resp);

/*
Spread Operator
*/