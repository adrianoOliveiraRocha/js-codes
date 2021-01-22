/*
	The most popular mathematician in the world is throwing
	a party for all of his friends. As a way to kick things off,
	they decide that everyone should shake hands. Assuming
	all 10 people at the party each shake hands with every other
	person (but not themselves, obviously) exactly once, how
	many handshakes take place?
*/

const solution = (numberOfPersons) => {
	return numberOfPersons * (numberOfPersons - 1)
}

console.log(solution(10))