var http = require('http')

var handleRequest = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('Welcome to Node Training and Fundamentals\n')
}

var server = http.createServer(handleRequest)

server.listen(3000, () => {
	console.log('port 3000 please')
})