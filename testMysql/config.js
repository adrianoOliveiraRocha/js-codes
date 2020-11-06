var mysql = require('mysql');
function connect() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'adriano',
    password: '453231',
    database: 'onlinemarketplace'
  });
}
module.exports = connect;