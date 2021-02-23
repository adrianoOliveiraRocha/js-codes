
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