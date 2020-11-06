class Person{
  constructor(name, age){
    this._name = name;
    this._age = age;
  }

  getName(){
    return this._name;
  }

  getAge() {
    return this._age;
  }
}

function sum(a, b) {
  return a * b;
}

var x = 4343;

module.exports.Person = Person; //export a class

module.exports.sum = sum; //export a function

module.exports.x = x; //exports a variable

module.exports.myvar = 345; //export a value 

