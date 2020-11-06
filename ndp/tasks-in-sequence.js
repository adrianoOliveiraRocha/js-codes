function task1(callback) {
	console.log('This is my task 1');
	callback();
}
function task2(callback) {
	console.log('This is my task 2');
	callback();
}
function task3(callback) {
	console.log('This is my task 3');
	callback();
}
function task4(callback) {
	console.log('This is my task 4');
	callback();
}
function finish(callback) {
	console.log('Ok! That is finished');	
}

const tasks = [task1, task2, task3, task4]; // list of tasks

function iterate(index) {
	if (index === tasks.length) {
		return finish();
	}
	const task = tasks[index];
	task(() => {
		iterate(index + 1);
	})
}

iterate(0);


// Another way
function task1 (number, callback) {
	var n = number * 2;
	task2(n, callback);
}

function task2 (number, callback) {
	var n = number * 2;
	task3(n, callback);
}

function task3 (number, callback) {
	var n = number * 2;
	callback(n, 'I am simulating a error');
}

task1(123, (n, error) => {
	// executed when task1, task2 and task3 are completed
	if(error) {
		console.log(`Oops! I have a error: ${error}`);
	} else {
		console.log(`tasks 1, 2 and 3 executed. Result: ${n}`);
	}	
	
});