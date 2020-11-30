'use strict';

function timeConversion(s) {
	var period = s.endsWith('AM') ? 0 : 1; // morning/afternoon
	
	var s = s.replace('PM', '');
	s = s.replace('AM', '');
	s = s.split(':');
	
	var seconds = parseInt(s[2]);
	var minutes = parseInt(s[1]);
	var hours = (function() {
		if(period == 0 && hours != '12') {
			console.log("period == 0 && hours != '12'");
			return parseInt(s[0]);
		} else if(period == 0 && hours == '12') {
			console.log("period == 0 && hours == '12'");
			return parseInt(s[0]) + 12;
		}
	})();
	
	var totalSeconds = (hours * 3600) + (minutes * 60) + (seconds);
	hours = parseInt(totalSeconds/3600);
	minutes = parseInt(totalSeconds%3600/60);
	seconds = parseInt(totalSeconds%3600%60);
		
	hours = (function(hours){
		if(hours == '12' && period == 0) return '00';
		else if(hours == '00' && period == 1) return '12';
		else return hours
	})(hours);
	
	function fixDecimalPlaces(x) {
		if(JSON.stringify(x).length == 1) return '0' + x;
		else return x;
	}
	
	return `${fixDecimalPlaces(hours)}:${fixDecimalPlaces(minutes)}:${fixDecimalPlaces(seconds)}`;
	
}

//timeConversion('12:34:02PM')
console.log(timeConversion('12:30:45AM'));
console.log(timeConversion('01:30:45AM'));
console.log(timeConversion('02:30:45AM'));
console.log(timeConversion('03:30:45AM'));
console.log(timeConversion('04:30:45AM'));
console.log(timeConversion('05:30:45AM'));
console.log(timeConversion('06:30:45AM'));
console.log(timeConversion('07:30:45AM'));
console.log(timeConversion('08:30:45AM'));
console.log(timeConversion('09:30:45AM'));
console.log(timeConversion('10:30:45AM'));
console.log(timeConversion('11:30:45AM'));
console.log(timeConversion('12:30:45PM'));
console.log(timeConversion('12:30:45PM'));
console.log(timeConversion('01:30:45PM'));
console.log(timeConversion('02:30:45PM'));
console.log(timeConversion('03:30:45PM'));
console.log(timeConversion('04:30:45PM'));
console.log(timeConversion('05:30:45PM'));
console.log(timeConversion('06:30:45PM'));
console.log(timeConversion('07:30:45PM'));
console.log(timeConversion('08:30:45PM'));
console.log(timeConversion('09:30:45PM'));
console.log(timeConversion('10:30:45PM'));
console.log(timeConversion('11:30:45PM'));
console.log(timeConversion('12:30:45PM'));



