const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'rom'

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true 
}

const client = new MongoClient(url, options)

module.exports = { client, dbName }

