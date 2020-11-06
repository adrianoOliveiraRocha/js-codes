var mysql = require('mysql');

var connection = (database = null) => {
    return connection = mysql.createConnection({
        connectionLimit: 1000,
        host: "localhost",
        user: "adriano",
        password: "453231",
        database: database,
        multipleStatements: true,
    })
}

module.exports.connection = connection;