const credentials = require('./psCredentials');
var request = require('request');

var options = {
    "method": 'POST',
    "url": `https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/request?email=${credentials.email}&token=${credentials.token}`,
    "headers": {
        "Content-type": "application/json;charset=ISO-8859-1",
        "Accept": "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    },

    body: JSON.stringify({
        "reference": "combinado",
        "preApproval": {
            "name": "COMBINADO, Sistema de Agendamento Online",
            "charge": "AUTO",
            "period": "MONTHLY",
            "trialPeriodDuration": 30,
            "amountPerPayment": 12.35,
        },
        "receiver": {
            "email": "adriano.qwe32@yahoo.com.br"
        },
    })

};


request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log('body: ', body);
});

/**
 * response: body:  {"code":"A6CEC4465A5A2869948A1F94E1AC169C","date":"2019-10-30T09:29:43-03:00"}
 * 
 */