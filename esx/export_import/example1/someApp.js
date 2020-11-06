const mymodule = require('./lib/mymodule.js');
console.log(mymodule.Person);
console.log(mymodule.pi);
console.log(mymodule.sum(45, 65));

let person = new mymodule.Person('Adriano', '78985451260');
console.log(person);
