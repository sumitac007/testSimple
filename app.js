
var http = require('http');
var express = require('express');

var app = express();

var hostname = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.PORT || 3000;


app.get('/',function(req,res,next){

	res.writeHead(200,{"Content-Type":"text/html"});
	res.end('<html><body><h1>Hello World!</h1></body></html>');

});

// var server;
// server = http.createServer(function (req, res) {
// 	console.log(req.headers);
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.end('<html><body><h1>Hello World</h1></body></html>');
// });

  // Set the IP and port to use the OpenShift variables.
  app.set('port',process.env.PORT || 3000);
  //app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || '127.0.0.1');

// ...

// Set the app.listen to use the port and ip.
app.listen(app.get('port'), function(){
  console.log("Express server listening on " + app.get('port'));
});
