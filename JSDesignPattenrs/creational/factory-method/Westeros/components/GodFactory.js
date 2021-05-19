'strict'
const Gods = require('./Gods')

function GodFactory() {
  this.build = function(godName) {
    switch (godName) {
      case "watery":
        return new Gods.WateryGod()
        break;
      
      case "ancient":
        return new Gods.AncientGods()
    
      default:
        return new Gods.DefaultGod()
        break;
    }
  }
}

module.exports = GodFactory;