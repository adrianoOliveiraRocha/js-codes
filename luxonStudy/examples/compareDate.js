var { DateTime } = require('luxon');

var dt1 = DateTime.fromObject({
    year: 2019,
    month: 8,
    day: 22,
    hour: 12,
    minute: 34,
});

var dt2 = DateTime.fromObject({
    year: 2019,
    month: 8,
    day: 22,
    hour: 12,
    minute: 34,
});

var dt3 = dt1.plus({ hours: 3, minutes: 25 });

console.log(dt1.toString() == dt2.toString());
console.log(dt1.toString() == dt3.toString());
console.log(dt1.toString() < dt3.toString());
console.log(dt1.toString() > dt3.toString());