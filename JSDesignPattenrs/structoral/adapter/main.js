function Shipping() {
  this.request = function(zipStart, zipEnd, weight) {
    this.zipStart = zipStart
    this.zipEnd = zipEnd
    this.weight = weight
    return "$49.75"
  }
}

function AdvancedShipping() {
  this.login = function(credentials) {/*...*/}
  this.setStart = function(start) {/*...*/}
  this.setDestination = function(destination) {/*...*/}
  this.calculate = function(weight) { return "$39.50" }
}

function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();
  shipping.login(credentials)
  return {
    request: function(zipStart, zipEnd, weight) {
      shipping.setStart(zipStart)
      shipping.setDestination(zipEnd)
      return shipping.calculate(weight)
    }
  }
}

const log = (function() {
	var log = ''
	return {
		add: function(msg) {log += msg + "\n"},
		show: function() {console.log(log); log = ""}		
	}
})()

function run() {
  var shipping = new Shipping()
  var cost = shipping.request("78701", "10010", "2 lbs")
  log.add("old cost: " + cost)
  
	var credentials = {token: "30a8-6ee1"}
	const adapter = new ShippingAdapter(credentials)
	cost = adapter.request("78701", "10010", "2 lbs")
	log.add("new cost: " + cost)
	log.show()
}

run()