// Load module dependencies
var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    request = require('request'),
    gm = require('gm').subClass({ imageMagick: true });

http.createServer(function(req, res) {
    
    var parts = url.parse(req.url, true);
    var query = parts.query;
    
    // Load image from internet
    var stream = request(query.url);
    var bufs = [];
    
    stream.on('data', function(data) {
    // TODO: How to add an element to an array
       bufs.push(data);
    });
    
    // TODO: Event fires when there will be no more data to read.
    stream.on('end', function() {
        var buf = Buffer.concat(bufs);
        gm(buf)
        .resize(100)
        .toBuffer(function (err, buffer) {
          if (err) return console.log(err);
          // http response
            res.end(buffer);
        })
    });
    
    
}).listen(3000);


console.log('node server running on port 3000');