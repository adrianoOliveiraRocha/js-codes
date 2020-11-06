const stripe = require('stripe')('sk_test_zurwMMbzvpuTJ4wPfsJp1vKR00HQVStgOp');

(async() => {
    const charge = await stripe.charges.create({
        amount: 999,
        currency: 'usd',
        source: 'tok_visa',
        receipt_email: 'jenny.rosen@example.com',
    });
    console.log(charge);
})();