'strict'

const KingJoffery = (function () {

  function KingJoffery() {

  }

  KingJoffery.prototype.makeDecision = function() {
    console.log("Decision King Joferry");
  }

  KingJoffery.prototype.marry = function() {

  }

  return KingJoffery

})()

const KingAerys = (function(){
  function KingAerys() {}
  
  KingAerys.prototype.makeDecision = function() {
    console.log("Decision of the King Aerys")
  }
  
  return KingAerys
  
})()

module.exports.KingJoffery = KingJoffery
module.exports.KingAerys = KingAerys

