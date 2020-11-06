// Singleton

/** 
 * Because the module is cached, every module that requires the logger module will actually
   always retrieve the same instance of the object, thus sharing its state
*/

function Logger(name) {
  this.count = 0;
  this.name = name;
  this.state = false;
}

Logger.prototype.log = function(message) {
  this.count ++;
  console.log('['+ this.name +'] ' + message + 'My state is: ' + this.state);  
}

Logger.prototype.setState = function(state) {
  this.state = state;
}

module.exports = new Logger('DEFAULT');