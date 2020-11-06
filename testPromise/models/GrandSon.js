class GrandSon {
  constructor(name, sonId) {
    this.name = name
    this.sonId = sonId
  }

  static saveGrandSon(sonId, connect, callback) {
    let stm = `
    insert into grandson(name, sonId) values('Juliana Pereiera', ${sonId});
    insert into grandson(name, sonId) values('Daniela Pereiera', ${sonId});
    insert into grandson(name, sonId) values('Thiago Pereiera', ${sonId});
    `
    connect.query(stm, callback)
  }
}

module.exports = () => {
  return GrandSon
}