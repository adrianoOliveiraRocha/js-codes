function getConnect() {
  // sudo service mongod start 
  // npm run test async-test — detectOpenHandles
  return new Promise((resolve, reject) => {
    const dbConfig = require('./../config/connect');
    const client = dbConfig.client;

    client.connect(err => {
      if(err) {
        connect.close();
        reject(err);        
      } else {
        resolve(true);
      }
    });

  });
}

beforeAll(() => console.log('Thi init of all tests'));
afterAll(() => console.log('All is finished'));

test('Testing connect', () => {
  return getConnect()
    .then(response => {
      expect(response).toBe(true);
    })
    .catch(error => {
      console.error(error);
    })
})