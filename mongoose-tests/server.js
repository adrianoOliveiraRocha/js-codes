const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', './app/views')
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(8000, () => {
  console.log('ok! port 8000')
})

require('./app/routs/core')(app)
require('./app/routs/kitten')(app)



