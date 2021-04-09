'strict'

var test = false;
var sayMoo;

if(test) {
	sayMoo = () => {
		return "true moo";
	}
} else {
	sayMoo = () => {
		return "false moo";
	}
}

console.log(sayMoo());
