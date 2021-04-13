'strict'

function privateTest() {
  var points = 0
  this.getPoints = function() {
    this.test = 'I am testing'
    return "private points: " + points + ' ' + this.test
  }
  
  this.score = function() {
    points++
  }
}

const pt = new privateTest();
console.log(pt.getPoints())
pt.score();
console.log(pt.getPoints()) 

