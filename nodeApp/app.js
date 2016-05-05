var http = require('http');

var port = 8000;

var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, function() {
  console.log('Server running at http://localhost:' + port);
});
