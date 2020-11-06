/* jshint esversion: 6 */

// example 1
const target = {
  message: 'This is the message',
};

const handler = {
  get: (target, objectKey) => {
    console.log(`Reading property "${objectKey}"`); // objectKey is message
    return target[objectKey]; // returning the message key value
  }
};

let p = new Proxy(target, handler);
console.log(p.message);

//example 2
const handler1 = {
  set: (target, objectKey, value) => {
    if (objectKey == 'message' && (value.length == 0 ||
        typeof (value) == 'string')) {
      throw new TypeError('Either message is empty or not valid string');
    }
    target[objectKey] = value;
    return true;
  }
};

let p1 = new Proxy({}, handler1);
p1.message = '';
console.log(p1.message);
p1.text = 'This is the message';
console.log(p1.text);