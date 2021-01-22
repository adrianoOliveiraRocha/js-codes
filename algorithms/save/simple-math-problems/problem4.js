'strict'
/*
	In a farm there are chickens and rabbits totaling 35 animals, which together add up to 100 feet.
	Determine the number of chickens and rabbits in this farm.
*/

function solution(sumOfAnimals, sumOfFoots) {
	let arr = []
	for(let i = 1; i <= sumOfAnimals; i++) {
		arr.push(i);
	}
	let possibilities = [];
	arr.forEach(c => {
		arr.forEach(r => {
			if(c + r === sumOfAnimals) possibilities.push([c, r]);
		});
	});
	possibilities.forEach(pair => {
		if(2 * pair[0] + 4 * pair[1] == sumOfFoots) console.log(pair);
	});
}

solution(35, 100);