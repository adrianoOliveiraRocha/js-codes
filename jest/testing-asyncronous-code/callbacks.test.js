function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operation(op, a, b) {
  return op(a, b);
}

test('testing callback functions', () => {
  expect(operation(sum, 1, 2)).toBe(3);
  expect(operation(subtract, 3, 1)).toBe(2);
  expect(operation(multiply, 2, 2)).toBe(4);
  expect(operation(divide, 4, 2)).toBe(2);
});
