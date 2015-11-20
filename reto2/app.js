// Load module dependencies
var http = require('http'),
    fs = require('fs');

http.createServer(function(request, response) {

    request.head(uri, function(err, res, body){
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });

}).listen(3000);

console.log('node server running on port 3000');