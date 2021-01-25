/*
	At the warm-up event for Oscar’s All Star Hot Dog Eating
	Contest, Al ate one hot dog. Bob then showed him up by
	eating three hot dogs. Not to be outdone, Carl ate five. This
	continued with each contestant eating two more hot dogs
	than the previous contestant. How many hot dogs did Zeno
	(the 26th and final contestant) eat? How many hot dogs were
	eaten all together?
*/

function solution(numberOfCompetitors) {
	let result = {1: 1};
	let hd = 1;
	for(let i = 2; i <= numberOfCompetitors; i++) {
		hd += 2;
		result[i] = hd;
	}
	console.log(`Zeno ate: ${result[numberOfCompetitors]}`);
	let total = Object.values(result).reduce((acum, curr) => acum + curr);
	console.log(`Total: ${total}`)
}

solution(26);