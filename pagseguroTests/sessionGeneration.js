const credentials = require('./psCredentials');
var request = require('request');

var options = {
    "method": 'POST',
    "url": `https://ws.sandbox.pagseguro.uol.com.br/sessions/email=${credentials.email}&token=${credentials.token}`,
    "headers": {
        "Content-type": "application/json;charset=ISO-8859-1",
        "Accept": "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log('body: ', body);
});