const log = require('./../../helpers/Log');

function TrafficLight() {
  var count = 0;
  var currentState = new Red(this);

  this.change = function change(state) {
    // limits number of changes
    if (count++ >= 10) return;
    currentState = state;
    currentState.go();
  };

  this.start = function () {
    currentState.go();
  };
}

function Red(light) {
  this.light = light;

  this.go = function () {
    log.add("Red --> for 1 minute");
    light.change(new Green(light));
  }
};

function Yellow(light) {
  this.light = light;

  this.go = function () {
    log.add("Yellow --> for 10 seconds");
    light.change(new Red(light));
  }
};

function Green(light) {
  this.light = light;

  this.go = function () {
    log.add("Green --> for 1 minute");
    light.change(new Yellow(light));
  }
};

function run() {
  var light = new TrafficLight();
  light.start();

  log.show();
}

run();