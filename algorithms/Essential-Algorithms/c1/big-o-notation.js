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
2, so O(2 + N) simplifi es to O(N)
*/


