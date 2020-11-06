// Using Promise.all()

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

const p1 = new Promise((resolve, reject) => {
    const fs = require('fs')
    fs.readFile('./todos1.json', 'utf8', (error, content) => {
        if (error) {
          reject(error)
        } else {
          resolve(content)
        }
      }
    )
  }
)

Promise.all([p, p1]).then(([res, res1]) => {
  console.log(res)
  console.log(res1)
})
.catch((err) => {
  console.error(err)
})