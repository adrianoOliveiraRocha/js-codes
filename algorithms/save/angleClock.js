/*

Equation for the angle of the hour hand
θhr =  0.5 * ( 60 * H * M )  

Equation for the angle of the minute hand
θmin = 6 * M

Equation for the angle between the hands
Tetaθ = 0.5 * (60 * H - 11 * M)

Problem:
hourHand = 2
minuteHand = 4

*/

function angleClock(hour, minute) {
  let h = 0.5 * (60 * hour * minute);
  let m = 6 * minute;
  let angle = h - m;
  console.log(angle);
  return (angle > 180) ? 360 - angle : angle;
}

console.log(angleClock(2, 4));
