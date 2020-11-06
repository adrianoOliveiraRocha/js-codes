const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({ c: 4, d: 5 }, object1);
console.log(object2.a);
console.log(object2.b);
console.log(object2.c);
console.log(object2.d);

/**
 * Notice that the object have the property a and b 
 * that is of the object 1
 */