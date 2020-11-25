// call pass the context to a function

// ex 1:
function myFunction() {
  console.log(this.firstName + ' ' + this.secondName);
}

var Person = {
  firstName: 'Adriano',
  secondName: 'Oliveira'
}

myFunction.call(Person);

// ex 2:
function identify() {
  return this.name.toUpperCase();
}

function speak() {
  console.log("Hello, I'm " + identify.call(this));
}

var me = {
  name: 'Adriano Oliveira'
}

var you = {
  name: 'Anyone'
}

speak.call(me);
speak.call(you);
