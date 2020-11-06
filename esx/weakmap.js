let wm = new WeakMap();

obj = {
  key1: {
    k: 'v1'
  },
  key2: {
    k: 'v2'
  },
};

console.log(obj.key1);
console.log(obj.key2);

wm.set(obj.key1, 'val1');
wm.set(obj.key2, 'val2');

console.log(wm.has(obj.key1));