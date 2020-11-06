
class Square {

  constructor(_width) {
    this.width = _width;
    this.hight = _width;
  }
	
  get area() {
		return this.width * this.hight
  }
  
  set area(area) {
    this.width = Math.sqrt(area)
    this.hight = this.width
  }

}

let square1 = new Square(25)
console.log(square1.area)

square1.area = 30
console.log(square1.area)

