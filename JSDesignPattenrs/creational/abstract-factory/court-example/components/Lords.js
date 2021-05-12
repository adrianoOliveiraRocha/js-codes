'strict'

const LordConnington = (function() {
  
  function LordConnington() {}
  
  LordConnington.prototype.makeDecision = function() {
    console.log("Decision Lord Conninton");
  }
  
  return LordConnington
  
})()

const LordTywin = (function() {
  
  function LordTywin() {

  }

  LordTywin.prototype.makeDecision = function() {
    console.log("Decision Lord Tywin");
  }

  return LordTywin

})()

module.exports.LordTywin = LordTywin
module.exports.LordConnington = LordConnington
