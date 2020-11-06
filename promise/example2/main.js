/*
https://stackabuse.com/reading-and-writing-json-files-with-node-js/
*/
const p = new Promise((resolve, reject) => {
  const fs = require('fs')

  fs.readFile('./values.json', 'utf8', (error, result) => {
    if (error) {
      reject(error)
    } else {
      resolve(JSON.parse(result))
    }
  })

})

p.then(
  (result) => {
    let upd = result.v1 * result.v2
    console.log(upd)
  }
).catch(
  (error) => {
    console.error(error)
  }
)