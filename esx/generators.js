// The most important feature in generators is that it does not ring immediately

// with function
function* generatorForLoop(num) {
  for (let i = 0; i < num; i += 1) {
    yield console.log(i);
  }
}

const genForLoop = generatorForLoop(5);

genForLoop.next();
genForLoop.next();
genForLoop.next();
genForLoop.next();
genForLoop.next();

// with class
class MyClass {
  *generatorForLoop(num) {
    for (let i = 0; i < num; i += 1) {
      yield console.log(i);
    }
  }
}

function* generatorForLoop(num) {
  for (let i = 0; i < num; i += 1) {
    yield console.log(i);
  }
}
let mc = new MyClass();
const genForLoop = mc.generatorForLoop(5);

genForLoop.next();
genForLoop.next();
genForLoop.next();
genForLoop.next();
genForLoop.next();

// using yield
function* getWord() {
  const words = ['word1', 'word2', 'word3'];
  for (const word of words) {
    yield word;
  }
}

let myVariable = getWord();
console.log(myVariable.next().value);
console.log('Here I can to do several things');
console.log(myVariable.next().value);
console.log('The values are called when I need them');
console.log(myVariable.next().value);

// Yield delegator
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield* anotherGenerator(i);
}

var gen = generator(2);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Methods and initialization
function* generator(arg = 'Nothing') {
  yield arg;
}

const gen0 = generator();
const gen1 = generator('Hello');

console.log(generator().next());
console.log(gen0.next());
console.log(gen1.next());

//Implementation of custom methods
function* generator() {
  yield 1;
}

generator.prototype.__proto__;

generator.prototype.__proto__.math = function (e = 0) {
  return e * Math.PI;
}
generator.prototype.__proto__.name = function () {
  return 'Adriano Oliveira';
}

generator.prototype.__proto__;

const gen = generator();
console.log(gen.math(1));
console.log(gen.name());

//The use of generators!
function* randomFrom(...arr) {
  while (true) {
    yield arr[Math.floor(Math.random() * arr.length)];
  }
}

const getRandom = randomFrom(1, 2, 5, 9, 4);
console.log(getRandom.next().value);

// fibonacci

/*
There is no need of recursion more! And we can get the next number,
 when we really need them.
*/
function* fibonacci(seed1, seed2) {
  while (true) {
    yield (() => {
      seed2 = seed2 + seed1;
      seed1 = seed2 - seed1;
      return seed2;
    })();
  }
}

const fib = fibonacci(0, 1);
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());


// A simple example
function *test(input) {
	yield 34 * input
	yield 35 * input
	yield 45 * input
	return 'test'
}

const t = test(4)
console.log(t.next())
console.log(t.next())
console.log(t.next())
console.log(t.next())