var paypal = require('paypal-rest-sdk');
var credentials = require('./paypalCombinado');
console.log(credentials);
paypal.configure({
    mode: 'sandbox',
    client_id: credentials.client_id,
    client_secret: credentials.client_secret
});

var billingPlanAttribs = {
    name: 'Combinado: Standard',
    description: 'Query Scheduling System.',
    type: 'fixed',
    payment_definitions: [{
        name: 'Standard Plan',
        type: 'REGULAR',
        frequency_interval: '1',
        frequency: 'MONTH',
        cycles: '12',
        amount: {
            currency: 'BRL',
            value: '9.99'
        }
    }],
    merchant_preferences: {
        setup_fee: {
            currency: 'BRL',
            value: '1'
        },
        cancel_url: 'http://combinado.kinghost.net:21095/cancel',
        return_url: 'http://combinado.kinghost.net:21095/processagreement',
        max_fail_attempts: '0',
        auto_bill_amount: 'YES',
        initial_fail_amount_action: 'CONTINUE'
    }
};

paypal.billingPlan.create(billingPlanAttribs, function(error, billingPlan) {
    var billingPlanUpdateAttributes;

    if (error) {
        console.error(JSON.stringify(error));
        throw error;
    } else {
        // Create billing plan patch object
        billingPlanUpdateAttributes = [{
            op: 'replace',
            path: '/',
            value: {
                state: 'ACTIVE'
            }
        }];

        // Activate the plan by changing status to active
        paypal.billingPlan.update(billingPlan.id, billingPlanUpdateAttributes, function(error, response) {
            if (error) {
                console.error(JSON.stringify(error));
                throw error;
            } else {
                console.log('response: ', response);
                console.log('Billing plan created under ID: ' + billingPlan.id);
            }
        });
    }
});
// Plan created
// response:  { httpStatusCode: 200 }
// Billing plan created under ID: P-8G060401R63730707SGIDE3Y