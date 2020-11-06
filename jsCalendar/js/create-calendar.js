var element = document.getElementById('my-calendar');
var myCalendar = jsCalendar.new(element);

myCalendar.onDateClick(function(event, date) {
    console.log(date);
    console.log('Day: ', date.getDate());
    console.log('Month: ', date.getMonth());
    console.log('Year: ', date.getFullYear());
});

myCalendar.onMonthChange(function(event, date) {
    console.log(date.getMonth());
});