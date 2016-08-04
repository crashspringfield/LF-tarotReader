var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');


var app = express();

app.use(bodyParser()); // or app.use(bodyParser.json());
app.use('/app', express.static(__dirname + '/app'));
// app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

// app.post('/app/js/card-dealer.js', mapController.initMap);

app.listen('3000', function() {
  console.log('listening on http://localhost:3000/');
});
