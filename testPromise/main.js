const Person = require('./models/Person')()
const Son = require('./models/Son')()
const GrandSon = require('./models/GrandSon')()
const connect = require('./connect')

function savePerson() {
  return new Promise((resolve, reject) => {    
    Person.savePerson(connect, (error, result) => {
      if (error) {
        reject(error.sqlMessage) // return error
      } else {
        resolve(result['insertId']) // return result
      }
    })
  })
}

savePerson().then(personId => {
  return new Promise((resolve, reject) => {    
    Son.saveSon(personId, connect, (error, result) => {
      if (error) {
        reject(error.sqlMessage) // return error
      } else {
        resolve(result.insertId) // return result
      }
    })
  })
}).then(sonId => {
  return new Promise((resolve, reject) => {
    GrandSon.saveGrandSon(sonId, connect, (error, result) => {
      if (error) {
        reject(error.sqlMessage)
      } else {
        resolve(result)
      }
    })
  })
}).then(result => {
  console.log(result)
}).catch(error => {
  console.error(error)
}).then(() => {
  connect.end()
  console.log('connect closed')
})
