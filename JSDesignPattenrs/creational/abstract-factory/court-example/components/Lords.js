'strict'

const LordConnington = (function() {
  
  function LordConnington() {
    // console.log("LordConnington created")
  }
  
  LordConnington.prototype.makeDecision = function() {
    console.log("Decision of the Lord Conninton");
  }
  
  return LordConnington
  
})()

const LordTywin = (function() {
  
  function LordTywin() {

  }

  LordTywin.prototype.makeDecision = function() {
    console.log("Decision of the Lord Tywin");
  }

  return LordTywin

})()

module.exports.LordTywin = LordTywin
module.exports.LordConnington = LordConnington
