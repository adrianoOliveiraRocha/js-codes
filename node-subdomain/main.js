const express = require('express')
const app = express()

app.set('subdomain offset', 2);

app.get('/', (req, res) => {
  console.log(req.subdomains)
  res.json(req.subdomains)
})

app.listen(80, () => {
  console.log('port 80 please')
})