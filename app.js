
var http = require('http');

var hostname = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

var server;
server = http.createServer(function (req, res) {
	console.log(req.headers);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<html><body><h1>Hello World</h1></body></html>');
});

server.listen(port,hostname,function(){
	console.log('Server running at http://' + hostname + ':' + port);
});