module.exports.sum = (x, y) => {
  return x + y;
} 


module.exports.pi = 3.141593;

 class Person {
  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
  }

  getName() {
    return this.name;
  }

  getCpf() {
    return this.cpf
  }

}

module.exports.Person = Person;


