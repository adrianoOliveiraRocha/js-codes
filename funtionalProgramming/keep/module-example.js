'strict'

function MyModule(p1=1, p2=2) {
  let att1 = p1
  let att2 = p2
  
  return {
    getAtt1: function() {
      this.att3 = 3
      return [att1, this.att3]
    },
    
    getAtt2: function() {
      this.att4 = 4
      return [att2, this.att4]
    }
  }
  
}
const mm = new MyModule(67, 54)
console.log(mm.getAtt1())
console.log(mm.getAtt2())
