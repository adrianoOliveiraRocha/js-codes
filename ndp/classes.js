"use strict"

class Person {
  constructor (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName () {
    return this.name + ' ' + this.surname;
  }

  static older (p1, p2) {
    return (p1.age >= p2.age) ? p1: p2;
  }

}

class PersonWithMeddlename extends Person {
  constructor (name, middlename, surname, age) {
    super(name, surname, age);
    this.middlename = middlename;
  }

  getFullName () {
    return this.name + ' ' + this.middlename + ' ' + this.surname;
  }
}

var p1 = new Person('Adriano', 'Oliveira', 46);
var p2 = new Person('Danielle', 'Peixoto', 10);
console.log(p1, p2);
console.log(Person.older(p1, p2));

var pwmn = new PersonWithMeddlename('Adriano', 'Oliveira', 'da Rocha', 46);
console.log(pwmn.getFullName()); 

