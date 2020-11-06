const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'peper towels',
  'beer'
];

test('the shopping list has bee on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});