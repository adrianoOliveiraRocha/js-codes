const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())
app.set('view engine', 'ejs')
app.set('views', './app/views')
app.set(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true}))

require('./app/routs/core')(app)

app.listen(8000, () => {
  console.log('running on port 8000')
})

