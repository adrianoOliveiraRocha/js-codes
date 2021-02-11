'strict'

let sayMoo;
if(false) {
  sayMoo = function() { console.log("sayMoo true") }
} else {
  sayMoo = function() { console.log("sayMoo false") }
}

sayMoo()




