'strict'
/*
A father's age is four times his son's age (p1). Five years (y) from now, the father's age will be 
three times (p2) the child's age. What is the current age of the son?
*/

function solution(p1, y, p2) {
	/*
		p1: proportion father/son
		y: how much years later
		p2: proportion father/son
	*/
	for(let i = 0; i < 120; i++) {
		// 120 because nobody lives more than 120 years
		if((p1 * i) + y === p2 * (i + y)) return i;
	}

	return null;

}

console.log(solution(4, 5, 3)); // 10
console.log(solution(5, 5, 3)); // 5
