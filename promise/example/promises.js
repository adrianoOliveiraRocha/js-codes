let p = new Promise(function(resolve, reject) {
  const fs = require('fs')
  fs.readFile('./test.txt', 'utf8', function(error, content) {
    if (error) {
      reject(error)
    } else {
      resolve(content)
    }
  })
})

p.then(function(response) {
  console.log(response)
}).catch(function(error) {
  console.error(error)
})