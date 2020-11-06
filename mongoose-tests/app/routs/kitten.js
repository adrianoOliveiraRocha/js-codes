module.exports = (app) => {
  app.get('/kitten-form', (req, res) => {
    require('../controllers/kitten').kittenForm(req, res)
  })

  app.post('/new-kitten', (req, res) => {
    require('../controllers/kitten').new(req, res)
  })

  app.get('/find-all', (req, res) => {
    require('../controllers/kitten').findAll(req, res)
  })
}