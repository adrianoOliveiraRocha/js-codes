'strict'

// Object.create(prototype [, propertiesObject ] )

function Person(name) {
  this.name = name
}

var Woman = Object.create(Person)
Woman.prototype.weithPuzzy = function(weigth) {
  this.weigth = weigth
}
Woman.prototype.getWeigth = function() {
  return this.weigth
}
console.log(Person)
console.log(Woman)

let w1 = new Woman()
w1.weigth(50)





