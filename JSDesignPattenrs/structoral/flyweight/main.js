const log = require('./../../helpers/Log');
// It create a model with characteristics that will be shared for several objects
function FlyWeight(make, model, processor) {
  this.make = make;
  this.model = model;
  this.processor = processor;
}

const FlyWeightFactory = (function IIFE() {
  let flyweights = {};

  return {
    get(make, model, processor) {
      if (!flyweights[make + model]) {
        flyweights[make + model] = 
          new FlyWeight(make, model, processor);
      }
      return flyweights[make + model];
    },

    getCount() {
      var count = 0;
      for(let f in flyweights) count++;
      return count;
    }
  }
})();

function ComputerCollection() {
  var computers = {};
  var count = 0;

  return {
    add(make, model, processor, memory, tag) {
      computers[tag] = 
        new Computer(make, model, processor, memory, tag);
      count++;
    },

    get(tag) {
      return computers[tag];
    },

    getCount() {
      return count;
    }
  };

}

function Computer(make, model, processor, memory, tag) {
  this.flyweight = FlyWeightFactory.get(make, model, processor);
  this.memory = memory;
  this.tag = tag;
  this.getMake = function() {
    return this.flyweight.make;
  }
}

function run() {
  var computers = new ComputerCollection();

  computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
  computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
  computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
  computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
  computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
  computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
  computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

  log.add("Computers: " + computers.getCount());
  log.add("FlyWeights: " + FlyWeightFactory.getCount());
  log.show();

}

run();