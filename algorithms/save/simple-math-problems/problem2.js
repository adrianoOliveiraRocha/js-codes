'strict'
/*

Problem:
Find a number that satisfies the following equation:
3x + 4 = Y².
Y is any integer.
Write a function that solves this equation. Your function must receive two parameters: y and attempts. 
The attempts parameter is an integer that contains the number of attempts since this number may not 
exist. This would result in an infinite loop.

*/

function solution(y, attempts) {
	for(let i = 0; i < attempts; i++) {
		if((3 * i) + 4 === y**2) return i;
	}
	return false;
}
let x = solution(7, 1000000);
!x ? console.log("Not found") : console.log(x);