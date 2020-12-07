'use strict';

function timeConversion(s) {
	var period = s.endsWith('AM') ? 'AM' : 'PM'; // morning/afternoon
	
	var s = s.replace('PM', '');
	s = s.replace('AM', '');
	s = s.split(':');
	
	var seconds = parseInt(s[2]);
  var minutes = parseInt(s[1]);
  var hours = parseInt(s[0]);
  
  hours = (function() {
    
    if(hours === 12 && period === 'AM') {
      return 0;
    } else if (hours !== 12 && period === 'AM') {
      return hours;
    } else if(hours === 12 && period === 'PM') {
      return hours;
    } else if(hours !== 12 && period === 'PM') {
      return hours + 12;
    }
    
  })();
  
	var totalSeconds = (hours * 3600) + (minutes * 60) + (seconds);
	hours = parseInt(totalSeconds/3600);
	minutes = parseInt(totalSeconds%3600/60);
	seconds = parseInt(totalSeconds%3600%60);
		
	function fixDecimalPlaces(x) {
		if(JSON.stringify(x).length == 1) return '0' + x;
		else return x;
	}
  
  return `${fixDecimalPlaces(hours)}:${fixDecimalPlaces(minutes)}:${fixDecimalPlaces(seconds)}`;
	
}

module.exports = timeConversion;
