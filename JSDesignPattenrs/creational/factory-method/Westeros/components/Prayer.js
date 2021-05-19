'strict'

const GodFactory = require('./GodFactory')

function Prayer() {
  this.pray = function(godName) {
    let godFactory = new GodFactory()
    return godFactory.build(godName)
  }
}

module.exports = Prayer