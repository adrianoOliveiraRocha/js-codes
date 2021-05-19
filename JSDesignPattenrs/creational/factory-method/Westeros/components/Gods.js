'strict'

function WateryGod() {
  this.prayTo = function() {
    console.log("Praying to WateryGod")
  }
}

function AncientGods() {
  this.prayTo = function() {
    console.log("Praying to AncientGods");
  }
}

function DefaultGod() {
  this.prayTo = function() {
    console.log("Praying to DefaultGods");
  }
}

module.exports.WateryGod = WateryGod
module.exports.AncientGods = AncientGods
module.exports.DefaultGod = DefaultGod