var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req,res){
    console.log('Request for ' + req.url + ' by method ' + req.method);
});

server.listen(port,hostname, function(){
    console.log(`Server running at ${hostname} : ${port}`);
});