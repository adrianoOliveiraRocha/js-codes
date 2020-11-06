const mockCallback = jest.fn(function(index) {
  return index + 42;
});

function forEach(items, callback) {
  for(let index = 0; index < items.length; index++) {
    callback(index);
  }
}

forEach([0, 1], mockCallback);

test('testing mock function', () => {
  console.log(mockCallback.mock.results);
  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);
  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});




