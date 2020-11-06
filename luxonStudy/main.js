var { DateTime } = require('luxon');

var dt = DateTime.local();
console.log(dt.toLocaleString());
console.log(dt.hour, dt.minute);
console.log('\n');

var dt1 = dt.plus({ hours: 3, minutes: 25 });
console.log(dt1.toLocaleString());
console.log(dt1.hour, dt1.minute);
console.log('\n');

var dt2 = dt1.minus({ hours: 3, minutes: 25 });
console.log(dt2.toLocaleString());
console.log(dt2.hour, dt2.minute);
console.log('\n');