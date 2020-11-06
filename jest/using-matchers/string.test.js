test("There is no I in team", function() {
  expect('team').not.toMatch(/I/);
});

test("but there is a 'stop' in 'Christoph'", () => {
  expect('Christoph').toMatch(/stop/);
});