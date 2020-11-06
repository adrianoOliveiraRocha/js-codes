// symbols

console.log(Symbol("foo") !== Symbol("foo"));
const foo = Symbol();
const bar = Symbol();
console.log(typeof foo === "symbol");
console.log(typeof bar === "symbol");
let obj = {};
obj[foo] = "foo";
obj[bar] = "bar";

console.log(JSON.stringify(obj));
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

// global symbols
console.log(Symbol.for("app.foo") !== Symbol.for("app.foo"));
const foo1 = Symbol.for("app.foo");
const bar1 = Symbol.for("app.bar");
console.log(typeof foo1 === "symbol");
console.log(typeof bar1 === "symbol");
let obj1 = {}
obj1[foo1] = "foo"
obj1[bar1] = "bar"
console.log(JSON.stringify(obj1)); // {}
console.log(Object.keys(obj1)); // []
console.log(Object.getOwnPropertyNames(obj1)); // []
console.log(Object.getOwnPropertySymbols(obj1)); // [ foo, bar ]

