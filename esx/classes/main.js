const models = require('./models/models.js');

shape = new models.Shape(1, 23, 43);
console.log(shape.toString());

rectangle = new models.Rectangle(2, 4, 6, 40, 20);
console.log(rectangle.toString());

circle = new models.Circle(3, 3, 5, 23);
console.log(circle.toString());

// using static methods

let rec = models.Rectangle.defaultRectangle();
console.log(rec);

let cir = models.Circle.defaultCircle();
console.log(cir);

//test set
var r = new models.Rectangle(50, 20);
console.log(r.area === 1000);

