var mysql = require('mysql')
function connect() {
  return mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'adriano',
    password: '453231',
    database: 'Test',
    multipleStatements: true,
  })
}

module.exports = connect()