'strict'

const Kings = require('./Kings')
const Lords = require('./Lords')

const LennisterFactory = (function() {
  
  function LennisterFactory() {

  }

  LennisterFactory.prototype.getKing = function() {
    return new Kings.KingJoffery()
  }

  LennisterFactory.prototype.getHandOfTheKing = function() {
    return new Lords.LordTywin()
  }

  return LennisterFactory

})()

const TargaryenFactory = (function() {
  
  function TargaryenFactory() {
    // console.log("TargaryenFactory created")
  }

  TargaryenFactory.prototype.getKing = function() {
    return new Kings.KingAerys()
  }

  TargaryenFactory.prototype.getHandOfTheKing = function() {
    return new Lords.LordConnington()
  }
  
  return TargaryenFactory
  
})()

module.exports.TargaryenFactory = TargaryenFactory
module.exports.LennisterFactory = LennisterFactory
