class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  toString(){
    return `Shape(${this.id})`;
  }  
}

class Rectangle extends Shape {
  constructor(id, x, y, width, hight) {
    super(id, x, y);
    this._width = width;
    this._hight = hight;
  }

  set width(width){
    this._width = width;
  }

  get width(){
    return this._width;
  }

  set hight(hight) {
    this._hight = hight;
  }

  get hight() {
    return this._hight;
  }

  static defaultRectangle() {
    return new Rectangle("default", 0, 0, 100, 100);
  }
  
  toString() {
    return "Rectangle > " + super.toString();
  }
}

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y);
    this.radius = radius;
  }

  static defaultCircle() {
    return new Circle("default", 0, 0, 100);
  }

  toString(){
    return "Circle > " + super.toString();
  }  
}

module.exports.Shape = Shape;
module.exports.Rectangle = Rectangle;
module.exports.Circle = Circle;
