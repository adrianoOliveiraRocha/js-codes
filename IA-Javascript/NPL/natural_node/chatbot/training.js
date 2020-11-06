const fs = require('fs')
const training = require('./training.json')

training.push({
  "clientTalk": ["novo", "treinamento"],
  "response": "Ok! O usuário escreveu um novo treinamento"
  })

fs.writeFile('./training.json', JSON.stringify(training), 'utf-8', (err) => {
  if(err) console.log(err)
  else console.log('success')
})