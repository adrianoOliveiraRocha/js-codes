const EventEmitter = require('events').EventEmitter;

class TestEE extends EventEmitter {
  constructor(number=0) {
    super();
    this.number = number;
    setTimeout(() => this.emit('ready'), 10);
    return this; // Don't forget return the class. That is how you can take the event
  }

  test() {
    if (this.number < 10) {
      setTimeout(() => this.emit('small', this.number), 10);
    } else {
      setTimeout(() => this.emit('large', this.number), 10);
    }
    return this; // Don't forget return the class. That is how you can take the event
  }
}

const tee = new TestEE(11);
tee.on('ready', () => { console.log('The object was ready') })
tee.test()
.on('small', (number) => { console.log(`The number ${number} is small`) })
.on('large', (number) => { console.log(`The number ${number} is large`) })