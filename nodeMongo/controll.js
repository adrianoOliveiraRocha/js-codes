const User = require('./User')

const data = { email: 'jane@gmail.com', pwd: 'jane123' }

User.insert(data, (err, result) => {
  if(err) throw new Error(err)
  else if(result.insertedCount == 1) {
    console.log('Successfull: ', result.insertedId)
  }
})