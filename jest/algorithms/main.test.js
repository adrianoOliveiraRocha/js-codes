const timeConversion = require('./main');

test('testing timeConversion', () => {
  expect(timeConversion('12:00:00AM')).toBe('00:00:00');
  expect(timeConversion('07:21:21AM')).toBe('07:21:21');
  expect(timeConversion('12:00:00PM')).toBe('12:00:00');  
  expect(timeConversion('07:21:21PM')).toBe('19:21:21');

});

// npm run test main.test.js