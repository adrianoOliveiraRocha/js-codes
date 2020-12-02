'use strict';

function countApplesAndOranges(s, t, a, b, apples, oranges){
	
	var howMatchApple = 0;
	var howMatchOranges = 0;
	
	apples.forEach(apple => {
		var p = a + apple;
		if(p >= s && p <= t) howMatchApple++;
	});
	
	oranges.forEach(orange => {
		var p = b + orange;
		if(p >= s && p <= t) howMatchOranges++;
	});	
	
	console.log(howMatchApple);
	console.log(howMatchOranges);
	
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

