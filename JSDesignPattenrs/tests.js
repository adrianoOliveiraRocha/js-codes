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

const LordConnington = (function() {
  
  function LordConnington() {}
  
  LordConnington.prototype.makeDecision = function() {
    console.log("Decision Lord Conninton");
  }
  
})()

const LordTywin = (function() {
  
  function LordTywin() {

  }

  LordTywin.prototype.makeDecision = function() {
    console.log("Decision Lord Lord Tywin");
  }

  return LordTywin

})()

const LannisterFactory = (function() {
  // abstractFactory
  function LannisterFactory() {

  }

  LannisterFactory.prototype.getKing = function() {
    return new KingJoffery()
  }

  LannisterFactory.prototype.getHandOfTheKing = function() {
    return new LordTywin()
  }

  return LannisterFactory

})()

const TargaryenFactory = (function() {
  // abstractFactory
  function TargaryenFactory() {

  }

  TargaryenFactory.prototype.getKing = function() {

  }

  TargaryenFactory.prototype.getHandOfTheKing = function() {
    return new LordConnington()
  }
})()

const CourtSession = (function() {
  function CourtSession(abstractFactory) {
    this.abstractFactory = abstractFactory
    this.COMPLAINT_THRESHOLD = 10
  }

  CourtSession.prototype.complainPresented = function(complaint) {
    if(complaint.severity < this.COMPLAINT_THRESHOLD) {
      this.abstractFactory.getHandOfTheKing().makeDecision()
    } else {
      this.abstractFactory.getKing().makeDecision()
    }
  }
})()



