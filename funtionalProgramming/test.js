'strict'

function clone(source, destination) {
  for(let attr in source.prototype) {
    destination.prototype[attr] = source.prototype[attr];
  }
}

prototype Castle = function() {
  
}

Castle.prototype.build = function() {
  console.log("Castle built")
}

let Winterfell = function() {}
Winterfell.prototype.addGodsWood = function() {}
let winterfell = new Winterfell()
console.log(winterfell)

