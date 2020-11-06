var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs'); // Define the template engine
app.set('views', './app/views'); // Define where is the views

app.use(express.static('./app/public'));

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  expressSession.cookie.secure = true;
}
consign()
  .include('app/routs')
  .then('app/control')
  .into(app);
  
module.exports = app;