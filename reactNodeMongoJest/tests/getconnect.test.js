function getConnect() {
  return new Promise((resolve, reject) => {
    const dbConfig = require('./../config/connect');
    const client = dbConfig.client;

    client.connect(err => {
      if(err) {
        console.error(err);
        reject(false);
      } else {
        resolve(true);
      }
    });

  });
}

test('Testing connect', () => {
  return getConnect()
    .then(response => {
      expect(response).toBe(true);
    })
})