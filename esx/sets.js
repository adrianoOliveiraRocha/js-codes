// http://es6-features.org/#SetDataStructure

let s = new Set();
s.add("hello").add("goodbye").add("hello");
s.add("myKey").add("I am pianist");

console.log(s.size === 2);
console.log(s.has("hello") === true);
for (const key of s.values()) {
  console.log(key)
}

console.log(s);
