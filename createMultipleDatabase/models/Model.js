const Model = (function() {
    return {
        createDataBase: function(dbName, connect, callback) {
            let stm = `create database ${dbName}`;
            connect.query(stm, callback);
        },

        showDataBases: (connect, callback) => {
            let query = 'show databases';
            connect.query(query, callback);
        },

        useDB: (dbName, connect, callback) => {
            let stm = `use ${dbName}`;
            console.log(stm);
            connect.query(stm, callback);
        }
    }
})();

module.exports = Model;