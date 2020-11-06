var { DateTime } = require('luxon');

var dt = DateTime.local();

var dt1 = DateTime.fromObject({
    day: 22,
    hour: 12,
    minute: 34,
    zone: 'America/Fortaleza',
    numberingSystem: 'beng'
});

var dt2 = DateTime.fromISO("2017-05-15T08:30:00");

// You can use it when you found out some date from sgdb
var dt3 = DateTime.fromSQL('2017-05-15 09:24:15');

var dt4 = DateTime.fromFormat('25 May 1988', 'dd LLLL yyyy', { locale: 'br' });

console.log(dt1.toString());