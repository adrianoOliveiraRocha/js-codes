var { DateTime } = require('luxon');

var dt = DateTime.local();
console.log(
    dt.day,
    dt.month,
    dt.year,
    dt.hour,
    dt.minute,
    dt.zoneName,
    dt.toLocaleString(), // Take confidence in it. Sometime, somebody that use browser in English can use it
    dt.toLocaleString(DateTime.DATETIME_FULL),
    dt.toISO(), //  the string read by another program
    dt.toISODate(),
    dt.toISOWeekDate(),
    dt.toISOTime(),
    dt.toRFC2822(),
    dt.toHTTP());

console.log(dt.toLocaleString(DateTime.TIME_24_SIMPLE));