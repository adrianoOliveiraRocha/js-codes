module.exports = function(application) {
  application.get('/', (req, res) => {
    application.app.control.core.index(req, res, application)
  })

  application.get('/test_ajax', (req, res) => {
    application.app.control.core.testAjax(req, res)
  }) 
}