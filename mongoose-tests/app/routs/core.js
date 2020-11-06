module.exports = (app) => {
  app.get('/', (req, res) => {
    require('../controllers/core').home(req, res)    
  })
}