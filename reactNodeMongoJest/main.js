const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

// the header will be Content-Type: application/json 
app.use(bodyParser.json());
// body will contain values of any type instead of just strings
app.use(bodyParser.urlencoded({
  extended: true  
}));

require('./app/routs/core.js')(app);
require('./app/routs/user.js')(app);

const httpServer = require('http').createServer(app);
httpServer.listen(8001, () => {
  console.log("Running on 8001 port");
});