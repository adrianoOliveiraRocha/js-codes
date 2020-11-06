const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(req.headers['accept-language'])
  res.json({
    'name': 'Adriano',
    'profession1': 'Musician',
    'profession2': 'Systems analist'
  })
})

app.listen(8000, () => {
  console.log('Server running...')
})