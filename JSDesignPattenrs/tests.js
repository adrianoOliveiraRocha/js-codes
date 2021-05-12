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
    console.log("Decision of the KingAerys")
  }
  
  return KingAerys
  
})()

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
    console.log("Decision Lord Lord Tywin");
  }

  return LordTywin

})()

// abstractFactory
const LennisterFactory = (function() {
  
  function LennisterFactory() {

  }

  LennisterFactory.prototype.getKing = function() {
    return new KingJoffery()
  }

  LennisterFactory.prototype.getHandOfTheKing = function() {
    return new LordTywin()
  }

  return LennisterFactory

})()

// abstractFactory
const TargaryenFactory = (function() {
  
  function TargaryenFactory() {

  }

  TargaryenFactory.prototype.getKing = function() {
    return new KingAerys()
  }

  TargaryenFactory.prototype.getHandOfTheKing = function() {
    return new LordConnington()
  }
  
  return TargaryenFactory
  
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
  
  return CourtSession
  
})()

let courtSession1 = new CourtSession(new TargaryenFactory())
courtSession1.complainPresented({severity: 8})
courtSession1.complainPresented({severity: 11})

let courtSession2 = new CourtSession(new LennisterFactory())
courtSession2.complainPresented({severity: 8})
courtSession2.complainPresented({severity: 12})





