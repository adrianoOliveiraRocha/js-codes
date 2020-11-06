class TaskQueue {

  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  pushTask(task) {
    this.queue.push(task);
    this.next();
  }

  next() {
    while(this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift();
      task(() => {
        this.running--;
        this.next();
      });
      this.running++;
    }
  }

};

function task1() {
  console.log('That is my task 1');
}

function task2() {
  console.log('That is my task 2');
}

function task3() {
  console.log('That is my task 3');
}

function task4() {
  console.log('That is my task 4');
}

const taskQueue = new TaskQueue(2);
taskQueue.pushTask(task1);
taskQueue.pushTask(task2);
taskQueue.pushTask(task3);
taskQueue.pushTask(task4);