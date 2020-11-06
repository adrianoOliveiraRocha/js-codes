const log = require('./../../helpers/Log');

var datastore = {
  processes() {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  }
};

function inherit(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F();
}

function run() {

  var mySql = inherit(datastore);

  mySql.connect = function() {
    log.add("MySQL: connect step");
  };

  mySql.select = function() {
    log.add("MySQL: select step");
  };

  mySql.disconnect = function() {
    log.add("MySQL: disconnect step");
  };

  mySql.processes();

  log.show();

};

run();