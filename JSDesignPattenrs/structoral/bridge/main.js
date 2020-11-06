/*
An example of the Bridge pattern is an application (the client) and a database
 driver (the service). The application writes to a well-defined database API, 
 for example ODBC, but behind this API you will find that each driver's 
 implementation is totally different for each database vendor (SQL Server, 
  MySQL, Oracle, etc.).
*/


// input devices
function Gestures(output) {
  this.output = output

  this.tap = function() { this.output.click() }
  this.swipe = function() { this.output.move() }
  this.pan = function() { this.output.drag() }
  this.pinch = function() { this.output.zoom() }

}

function Mouse(output) {
  this.output = output

  this.click = function() { this.output.click() }
  this.move = function() { this.output.move() }
  this.down = function() { this.output.drag() }
  this.wheel = function() { this.output.zoom() }
  
 }

 //output devices
 function Screen() {
  this.click = function() { log.add("Screen select") }
  this.move = function() { log.add("Screen move") }
  this.drag = function() { log.add("Screen zoon in") }
  this.zoom = function() { log.add("Screen zoom") }
 }

 function Audio() {
   this.click = function() { log.add("Sound oink") }
   this.move = function() { log.add("Sound waves") }
   this.drag = function() { log.add("Sound screetch") }
   this.zoom = function() { log.add("Sound volume up") }
 }

 // logging helper
 var log = (function() {
  var log = ""

  return {
    add: function(msg) { log += msg + "\n" },
    show: function() { console.log(log); log = "" }
  }
 })()

 function run() {
   var screen = new Screen()
   var audio = new Audio()

   var hand = new Gestures(screen)
   var mouse = new Mouse(audio)

   hand.tap()
   hand.swipe()
   hand.pinch()

   mouse.click()
   mouse.move()
   mouse.wheel()

   log.show()
 }

 run()
