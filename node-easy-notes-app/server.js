const express = require('express')
const bodyParser = require('body-parser')

// configuring the database
const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

//connecting to the database
mongoose.connect(dbConfig.url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log('Successfully connected to the database')
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err)
  process.exit()
})

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.get('/', (req, res) => {
  res.render('index.ejs')
})



// Require Notes routes
require('./app/routes/note.routes')(app)

app.listen(8000, () => {
  console.log('running on port 8000')
})

