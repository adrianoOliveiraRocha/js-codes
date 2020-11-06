module.exports.createDB = () => {

    const connect = require('../config/connect');
    const Model = require('../models/Model');
    var dbName = 'db' + Math.ceil(Math.random() * 1000000);

    console.log(dbName);

    Model.createDataBase(dbName, connect.connection(), (err, result) => {
        if (err) console.error(err.sqlMessage);
        else {
            console.log(result);
        };
    });

};

module.exports.showDataBases = () => {
    const connect = require('../config/connect');
    const Model = require('../models/Model');

    Model.showDataBases(connect.connection(database = 'db6951'), (err, result) => {
        if (err) console.error(err.sqlMessage);
        else {
            console.log(result);
        };
    });
}

module.exports.useDB = () => {
    const connect = require('../config/connect');
    const Model = require('../models/Model');
    let dbName = 'db6951';

    Model.useDB(dbName, connect.connection(), (err, result) => {
        if (err) console.error(err.sqlMessage);
        else {
            console.log(result);
        };
    });

}