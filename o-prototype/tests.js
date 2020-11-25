function myFunction() {
  console.log(this.firstName + ' ' + this.secondName);
}

var Person = {
  firstName: 'Adriano',
  secondName: 'Oliveira'
}

myFunction.call(Person);
