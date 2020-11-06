// emitting events synchronous
const EventEmitter = require('events').EventEmitter;
class SyncEmit extends EventEmitter {
constructor() {
    super();
    setTimeout( () => this.emit('ready'), 1);
  }
}
const syncEmit = new SyncEmit();
syncEmit.on('ready', () => console.log('Object is ready to be used'));