/* jshint esversion: 6 */

let obj = {
  a: 1
};
Object.defineProperty(obj, "b", {
  value: 2
});
obj[Symbol("c")] = 3;
var object = Reflect.ownKeys(obj);
console.log(object);