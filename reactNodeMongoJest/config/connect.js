const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongo://localhost:27017';
const dbName = 'testnodemongo';

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

const client = new MongoClient(url, options);
module.exports = { client, dbName, ObjectID };
