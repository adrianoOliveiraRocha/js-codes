var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs'); // Define the template engine
app.set('views', './app/views'); // Define where is the views
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('./app/public'));
app.use('/upload', express.static('./app/public/upload'));
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  expressSession.cookie.secure = true;
}
consign()
  .include('app/routs')
  .then('config/connect.js') //you must put the extension
  .then('app/models')
  .then('app/helpers')
  .then('app/control')
  .into(app);
  
module.exports = app;