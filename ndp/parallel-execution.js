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
function finish() {
	console.log('Ok! That is finished');	
}

const tasks = [task1, task2, task3, task4]; // list of tasks

let completed = 0;

tasks.forEach(task => {
  task(() => {
    if (++completed === tasks.length) {
      finish();
    }
  });
});

