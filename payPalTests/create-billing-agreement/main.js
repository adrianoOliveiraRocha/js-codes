const express = require('express');
const app = new express();

app.get('/', (req, res) => {
    var paypal = require('paypal-rest-sdk');
    var credentials = require('./paypalCombinado');

    paypal.configure({
        mode: 'sandbox',
        client_id: credentials.client_id,
        client_secret: credentials.client_secret
    });


    var billingPlan = 'P-5U369572K75734420RBDCIIY';
    var billingAgreementAttributes;
    var isoDate = new Date();

    isoDate.setSeconds(isoDate.getSeconds() + 4);
    isoDate.toISOString().slice(0, 19) + 'z';

    billingAgreementAttributes = {
        name: 'Standart Membershit',
        description: 'Combinado Club Standard Membership',
        start_date: isoDate,
        plan: {
            id: billingPlan
        },
        payer: {
            payment_method: 'paypal'
        }
    };

    var links = {};

    paypal.billingAgreement.create(billingAgreementAttributes, function(error, billingAgreement) {
        if (error) {
            console.error(JSON.stringify(error));
            throw new Error(error);
        } else {
            // Capture HATEOAS links
            billingAgreement.links.forEach(linkObj => {
                links[linkObj.rel] = {
                    href: linkObj.href,
                    method: linkObj.method
                };
            });
            // If redirect url present, redirect user
            if (links.hasOwnProperty('approval_url')) {
                //REDIRECT USER TO links['approval_url'].href
                res.redirect(links['approval_url'].href);
            } else {
                console.error('no redirect URI present');
            }
        }
    });


});

app.listen(8000, () => {
    console.log('running i on port 8000');
});

// EC-150363133N4494429