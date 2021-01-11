// apply
var numbers = [5, 6, 2, 3, 7];
Math.max.apply(null, numbers); // => Math.max(... numbers); 

/**
 * Call While the syntax of this function is almost identical to that of apply(), 
 * the fundamental difference is that call() accepts an argument list, while apply() 
 * accepts a single array of arguments. */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price); // looks like inheritance
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price); // looks like inheritance
    this.category = 'toy'
}

var chesse = new Food('cheese', 5);
var toy = new Toy('robot', 40);
console.log(fd);