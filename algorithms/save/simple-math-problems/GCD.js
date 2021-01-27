// Find the greatest common divisor of a and b.

function Gcd(a, b) {
	while(b != 0) {
		let remainder = a % b;
		a = b;
		b = remainder;
		// console.log(`a: ${a}, b: ${b}, remainder: ${remainder}`)
	}
	return a;
}

console.log(Gcd(8, 12));