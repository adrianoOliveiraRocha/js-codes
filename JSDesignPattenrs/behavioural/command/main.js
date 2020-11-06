function add(x, y) { return x + y }
function sub(x, y) { return x - y }
function mul(x, y) { return x * y }
function div(x, y) { return x / y }

function Command(execute, undo, value) {
  this.execute = execute
  this.undo = undo
  this.value = value
}

function AddCommand(value) {
  return new Command(add, sub, value)
}

function SubCommand(value) {
  return new Command(sub, add, value)
}

function MulCommand(value) {
  return new Command(mul, div, value)
}

function DivCommand(value) {
  return new Command(div, mul, value)
}

function Calculator() {
  var current = 0
  var commands = []

  function action(command) {
    var name = command.execute.toString().substr(9, 3)
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return {
    execute: function(command) {
      current = command.execute(current, command.value)
      commands.push(command)
      log.add(action(command) + ": " + command.value) 
    },

    undo: function() {
      var command = commands.pop()
      current = command.undo(current, command.value)
      log.add("Undo " + action(command) + ": " + command.value)
    },

    getCurrentValue: function() {
      return current
    }
  }
}

var log = (function() {
  var log = ""
  return {
    add: function(msg) { log += msg + "\n" },
    show: function() { console.log(log); log = "" }
  }
})()

function run() {
  var calculator = new Calculator()
  calculator.execute(new AddCommand(100))
  calculator.execute(new SubCommand(24))
  calculator.execute(new MulCommand(6))
  calculator.execute(new DivCommand(2))

  calculator.undo()
  calculator.undo()

  log.add("\nValue: " + calculator.getCurrentValue())
  log.show()
}

run()