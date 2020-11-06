class Son {
  constructor(name, personId) {
    this.name = name
    this.personId = personId
  }

  static saveSon(personId, connect, callback) {
    let stm = `
    insert into son(name, personId)
    values('Tânia Pereira', ${personId})`
    connect.query(stm, callback)
  }
}

module.exports = () => {
  return Son
}