test('two plus two', function() {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);

  expect(value).toBe(4);
  expect(value).toEqual(4)
});

test('adding float point numbers', function() {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});