const User = {
  collection: 'User',

  verify(data) {
    const dbConfig = require('./../../config');
    const client = dbConfig.client;

    client.connect(err)
  }
}

module.exports = User;