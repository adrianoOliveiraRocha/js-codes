const countApplesAndOranges = require('./main');

test('countApplesAndOranges test', () => {
  expect(gradingStudents([73, 67, 38, 33]))
  	.toStrictEqual([75, 67, 40, 33]);
});

// npm run test main.test.js

/*
to arrays:
expect(gradingStudents([73, 67, 38, 33]))
  	.toStrictEqual([75, 67, 40, 33]);
*/
