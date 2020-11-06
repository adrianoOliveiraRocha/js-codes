const log = require('./../../helpers/Log')

function User(name) {
  this.name = name;

  this.say = function() {
    log.add("User " + this.name)
  }
} 

function DecoratedUser(user, street, city) {
  this.user = user
  this.name = user.name
  this.street = street
  this.city = city

  this.say = function() {
    log.add("Decorator User: " + this.name + ", " + 
      this.street + ", " + this.city)
  }
}

function run() {
  var user = new User("Kelly")
  user.say()
  var decorated = new DecoratedUser(user, "Broadway", "New Yourk")
  decorated.say()

  log.show()
}

run()

