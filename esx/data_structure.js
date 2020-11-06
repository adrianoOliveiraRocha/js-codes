// TypedArrays
var buffer = new ArrayBuffer(32); //32 * 8 = 256

var int8View = new Int8Array(buffer);
for (var i = 0; i < int8View.length; i++) {
  int8View[i] = i + 1;
}
console.log(int8View); // 256/8 = 32

var int16View = new Int16Array(buffer);
for (var i = 0; i < int16View.length; i++) {
  int16View[i] = i + 1;
}
console.log(int16View); // 256/16 = 16

var int32View = new Int32Array(buffer);
for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i + 1;
}
console.log(int32View); // 256/32 = 8