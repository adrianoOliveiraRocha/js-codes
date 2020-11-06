module.exports.user = (app) => {
  app.get('/get-users', (req, res) => {
    require('./../controllers/user').getUsers(req, res)
  })
}