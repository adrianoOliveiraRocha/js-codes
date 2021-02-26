const tree = [  
  7, [
    [4, [[2, [1, 3]], [6, [5]]]], [9, [8, 10]]
  ]  
];

function findItem(targetValue, tree) {

  tree.forEach(element => {
		if(typeof element === 'number') {
			if(targetValue == element) {
				console.log(`The tree contains ${res}`);
			}
		} else {
			findItem(targetValue, element);
		}
	});
	
}

findItem(9, tree);
