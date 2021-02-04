/*

Big O Notation
There are fi ve basic rules for calculating an algorithm’s Big O notation:

1. If an algorithm performs a certain sequence of steps f(N) times for a math-
	ematical function f, it takes O(f(N)) steps.
	
2. If an algorithm performs an operation that takes O(f(N)) steps and then
	performs a second operation that takes O(g(N)) steps for functions f and
g, the algorithm’s total performance is O(f(N) + g(N)).	

3. If an algorithm takes O(f(N) + g(N)) and the function f(N) is greater than
	g(N) for large N, the algorithm’s performance can be simplified to O(f(N)).
	
4. If an algorithm performs an operation that takes O(f(N)) steps, and for
	every step in that operation it performs another O(g(N)) steps, the algo-
	rithm’s total performance is O(f(N) × g(N)).
	
5. Ignore constant multiples. If C is a constant, O(C × f(N)) is the same as
	O(f(N)), and O(f(C × N)) is the same as O(f(N)).
	
*/

/*
Example 1: 
rules 1, 2 and 3
*/

function findLargest(arr) {
  let largest = arr[0]; // rule 1: O(1)
  for(let i = 0; i <= arr.length; i++) { // rule 1: O(N)
    if(arr[i] > largest) largest = arr[i];
  }
  return largest; // rule 1: O(1)
}

let arr = [1, 3, 87, 1];
findLargest(arr);

// rule 2: O(1 + N + 1) == O(2 + N)

/*
rule 3: The preceding example showed that the FindLargest algorithm has runtime
O(2 + N). When N grows large, the function N is larger than the constant value
2, so O(2 + N) simplifies to O(N)
*/

/*
Example 2:
rule 4
*/

function ContainsDuplicates(arr) {
	for(i = 0; i < arr.length; i++) { // O(N)
		for(let j = 0; j < arr.length; j++) { // O(N)
			if(i != j) { // O(1)
				if(arr[i] == arr[j]) return true; // O(1)
			}
		}
	} 
	return false;
}	

arr1 = [1, 2, 3, 4, 5, 1];
console.log(ContainsDuplicates(arr1));

/*
Rule 5
ContainsDuplicates has O(N) * O(N) and O(1) + O(1)
O(N) * O(N) == O(N**2)
O(1) + O(1) = O(2)
Then we have O(2 + N**2)
Rule 5 lets you ignore factor 2 (it is constant) , so the runtime is O(N**2)
Why?
Test: N => 2 * N - multiplie for 2
2 * (2 * N) = 8N**2 => increased by factor 4
(2 * N)**2 = 4N**2 => increased by factor 4

*/

function dividingPoint(arr) {
	/*
	This algorithm picks the values at the beginning, end, and middle of the
	array, compares them, and returns whichever item lies between the other two
	*/
	console.log(arr);
	let n1 = arr[0]; // first
	let n2 = arr[parseInt(arr.length / 2)]; /*midle*/ 
	let n3 = arr[arr.length - 1]; // last
		
	if(n1 > n2 && n1 < n3) return n1;
	if(n2 > n1 && n2 < n3) return n2;
	
	return n3;
}

let arr = [];
for(let i = 0; i <= 100; i++) {
	if(1 % 2 == 0) arr.push(i);
	else arr.push(i * 7);
}

console.log(dividingPoint(arr));

/*
Because this algorithm performs only a few fixed steps, it has O(1) perfor-
mance and its runtime is independent of the number of inputs N.
*/




