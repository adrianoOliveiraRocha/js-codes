const log = require('../../helpers/Log')

function Factory() {

  this.createEmployee = function(type) {
    var employee;

    if(type === "fulltime") {
      employee = new Fulltime()
    } else if(type === "parttime") {
      employee = new Parttime()
    } else if(type === "temporary") {
      employee = new Temporary()
    } else if(type === "contractor") {
      employee = new Contractor()
    }

    employee.type = type;
    employee.say = function() {
      log.add(this.type + "; rate " + this.hourly + "/hour")
    }

    return employee
  }
  
}

function Fulltime() {
  this.hourly = "$12"
}

function Parttime() {
  this.hourly = "$11"
}

function Temporary() {
  this.hourly = "$10"
}

function Contractor() {
  this.hourly = "$15"
}

function run() {
  var employees = []
  var factory = new Factory()
  
  employees.push(factory.createEmployee("fulltime"))
  employees.push(factory.createEmployee("parttime"))
  employees.push(factory.createEmployee("temporary"))
  employees.push(factory.createEmployee("contractor"))

  employees.forEach(employee => {
    employee.say()
  })

  log.show()
}

run()