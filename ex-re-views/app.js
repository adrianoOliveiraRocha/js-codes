const express = require('express')
const path = require('path')

var app = express()
app.use(express.static(path.resolve('./public')))
app.set('views', path.resolve('./views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', require('./routes').index)

app.listen(8000, () => {
  console.log('server ok')
})
