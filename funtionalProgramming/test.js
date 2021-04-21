'strict'
// ()

let member = "global"

function f() {
  this.member = "f"
}

let o = new f()
console.log(o.member)
  
