'strict'

const KingJoffery = (function () {

  function KingJoffery() {

  }

  KingJoffery.prototype.makeDecision = function() {

  }

  KingJoffery.prototype.marry = function() {

  }

  return KingJoffery

})

const LordTywin = (function() {
  
  function LordTywin() {

  }

  LordTywin.prototype.makeDecision = function() {

  }

  return LordTywin

})

const LannisterFactory = (function() {
  
  function LannisterFactory() {

  }

  LannisterFactory.prototype.getKing = function() {
    return new KingJoffery()
  }

  LannisterFactory.prototype.getHandOfTheKing = function() {
    return new LordTywin()
  }

  return LannisterFactory

})

const TargaryenFactory = (function() {
  function TargaryenFactory() {

  }

  TargaryenFactory.prototype.getKing = function() {

  }

  TargaryenFactory.prototype.getHandOfTheKing = function() {
    return new LordConnington
  }
})