var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger()); 

var buf = fs.readFileSync('./index.html');
var cat = buf.toString();
app.get('/', function(request, response) {
  response.send(cat);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
