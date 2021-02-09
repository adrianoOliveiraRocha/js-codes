const fs = require('fs')

const DB = {
  get(ssn) {
    const db = fs.readFileSync('db/db.json')
    let dbJson = JSON.parse(db)
    return dbJson[ssn]
  }
}

module.exports = DB;