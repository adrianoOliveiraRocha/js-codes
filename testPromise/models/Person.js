class Person {

  constructor(name, cpf) {
    this.name = name
    this.cpf = cpf
  }

  static savePerson(connect, callback) {
    let stm = `
    insert into person(name, cpf)
    values('Rafael Pereira', '23454656789')`
    connect.query(stm, callback)
  }
  
}

module.exports = function() {
  return Person
}