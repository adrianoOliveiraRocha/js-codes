const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next()
})

app.get('/test-web', (req, res) => {
  res.send('This is the response from backend')
})

app.listen(8000, () => {
  console.log('server ok. Port 8000')
})

require('./routs/user').user(app)