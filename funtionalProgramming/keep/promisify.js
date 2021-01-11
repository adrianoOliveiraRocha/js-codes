/*

Example:

const fs = require('fs')

const fspromise = promisify(fs.readFile.bind(fs))

const goodHead = data => console.log('Successful Promise', JSON.stringify(data))
const badHead = err => console.log('Unsuccessful Promise', JSON.stringify(err))

fspromise("./someFile.txt")
  .then(goodHead)
  .catch(badHead)
*/

const promisify = fn => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, data) => (err ? reject(err) : resolve(data)))
  )

module.exports = promisify
