const express = require('express')
const app = express()

app.get('/', (req, res) => {
  Object.keys(req.query).forEach(key => {
    console.log(req.query[key])
  })
  res.send(req.query)
})

app.listen(8000, () => {
  console.log('Server running...')
})