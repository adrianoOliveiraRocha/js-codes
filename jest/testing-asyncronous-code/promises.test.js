async function testPromise(value) {
  return new Promise(function(resolve, reject) {
    typeof value == Number ? resolve('number') : reject(false);
  });
}

test('Testing my promise', function() {
  testPromise('test')
    .then(result => {
      expect(result).toBe('number');
    })
    .catch(result => {
      expect(result).toBe(false);
    })
});