var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var pageBuffer = fs.readFileSync('index.html', null); 

var page = pageBuffer.toString('utf8', 0, pageBuffer.len);

app.get('/', function(request, response) {
  response.send(page);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
