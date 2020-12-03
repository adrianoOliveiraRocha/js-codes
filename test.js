'use strict';

console.log(1);

setTimeout(() => {
  console.log("setTimeout 1");
  process.nextTick(() => console.log('nt 1'));
  process.nextTick(() => console.log('nt 2'));
  process.nextTick(() => console.log('nt 3'));
}, 0);

console.log(2);
const myObject = new MyClass();

myObject.someMethod(
	myObject.otherMethod(
		myObject.yeatOtherMethod()
		)
	);