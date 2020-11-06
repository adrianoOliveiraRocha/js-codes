
const p = new Promise((resolve, reject) => {
    const fs = require('fs')
    fs.readFile('./todos.json', 'utf8', (error, content) => {
        if (error) {
          reject(error)
        } else {
          resolve(content)
        }
      }
    )
  }
)

p.then((response) => {
  const jsresponse = JSON.parse(response)
  Object.values(jsresponse).forEach(
    (element) => {
      console.log(element)
    }
  )
}).catch((error) => {
  console.error(error)
})

