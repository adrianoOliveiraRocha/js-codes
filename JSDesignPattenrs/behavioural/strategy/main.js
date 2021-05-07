const log = require('./../../helpers/Log');

function Shipping() { // Interface
  this.company = null;
}

Shipping.prototype = {
  setStrategy(company) {
    this.company = company;
  },

  calculate(package) {
    return this.company.calculate(package);
  }
};

function UPS() {
  this.calculate = function(package) {
    return 45.95;
  }
}

function USPS() {
  this.calculate = function(package) {
    return 39.49;
  }
}

function Fedex() {
  this.calculate = function(package) {
    return 43.20;
  }
} 

function run() {
  var package = { from: "76712", to: "10012", weigth: "1kg" };
  var ups = new UPS();
  var usps = new USPS();
  var fedex = new Fedex();

  var shipping = new Shipping();
  shipping.setStrategy(ups);
  log.add("UPS strategy: $" + shipping.calculate(package));
  shipping.setStrategy(usps);
  log.add("USPS strategy: $" + shipping.calculate(package));
  shipping.setStrategy(fedex);
  log.add("FEDEX strategy: $" + shipping.calculate(package));

  log.show();
}

run();

