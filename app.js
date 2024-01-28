var path = require('path');
var express = require('express');
var app = express();

var htmlPath = path.join(__dirname, 'html');

app.use(express.static(htmlPath));

// Define a simple GET API endpoint
app.get('/api', function (req, res) {
    res.send('Hello, this is a simple GET API!');
});

var server = app.listen(5000, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log('listening on http://'+host+':'+port+'/');
});

