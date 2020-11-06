const log = require('./../../helpers/Log')

function Employee(name) {
  this.name = name

  this.say = function() {
    log.add("I am employee " + name)
  }
}

function EmployeeFactory() {
  this.create = function(name) {
    return new Employee(name)
  }
}

function Vendor(name) {
  this.name = name

  this.say = function() {
    log.add("I am a vendor " + name)
  }
}

function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name)
  }
}

function run() {
  var persons = []
  const employeeFactory = new EmployeeFactory()
  const vendorFactory = new VendorFactory()

  persons.push(employeeFactory.create("Joan DiSilva"))
  persons.push(employeeFactory.create("Tim O'Neill"))
  persons.push(vendorFactory.create("Gerald Watson"))
  persons.push(vendorFactory.create("Nicole McNight"))

  persons.forEach(person => {
    person.say()
  })

  log.show()
}

run()

