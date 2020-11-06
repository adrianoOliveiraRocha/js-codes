// Do go to the init of the bookmark 2

const http = require('http');
const url = require('url');

const fibonacciAsync =
    http.createServer(function(req, res) {
        let urlP = url.parse(req.url, true);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (urlP.query['n']) {
            fibonacciAsync(urlP.query['n'], fibo => {
                res.end('fibonacci ' + urlP.query['n'] + '=' + fibo);
            });
        } else {
            res.end('USAGE: http://127.0.0.1:8124?n=## where ## is the Fibonacci number desired');
        }
    }).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8000');