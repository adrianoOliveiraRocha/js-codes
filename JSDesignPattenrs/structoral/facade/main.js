function Mortgage(name) {
  this.name = name;
}

Mortgage.prototype = {

  applyFor(amount) {
    // access multiple subsystems...
    let result = "approved";
    if(!new Bank().verify(this.name, amount)) {
      retult = "denied";
    } else if(!new Credit().get(this.name)) {
      result = "denied";
    } else if (!new Background().check(this.name)) {
      result = "denied";
    }

    return `${this.name} has been ${result} for a ${amount} mortgage`;

  }

}

function Bank() {
  this.verify = function(name, amount) {
    // a lot of complexity
    return true;
  }
}

function Credit() {
  this.get = function(name) {
    // Oh my good! again...
    return true;
  }
}

function Background() {
  this.check = function(name) {
    // complex logic
    return true;
  }
}

function run() {
  let mortgage = new Mortgage("Jully Whatson");
  let result = mortgage.applyFor("$100,000");

  console.log(result);
}

run();
