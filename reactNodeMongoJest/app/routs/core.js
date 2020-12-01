module.exports = (app) => {
  app.get('/home', (req, res) => {
    require('./../control/core').home(req, res);
  });

  app.get('/get-json-response', (req, res) => {
    require('./../control/core').getJsonResponse(req, res);
  });

  app.post('/receive-values', (req, res) => {
    require('./../control/core').receiveValues(req, res);
  });

}