module.exports = (app) => {
  app.post('/register', (req, res) => {
    require('./../control/user').resgister(req, res);
  })
}