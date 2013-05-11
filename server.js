var express = require('express'),
    app = module.exports = express(),
    uuid = require('node-uuid'),
    request = require('request'),
    https = require('https'),
    http = require('http'),
    fs = require('fs');

var oauthToken = '14744138-NTKGRb2JlbKOIrVTwBXY6JwbTWXyJgFS1RFaJzQXP';
var options = {
  key : fs.readFileSync(__dirname + '/../key.pem'),
  cert : fs.readFileSync(__dirname + '/../cert.pem')
};

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    'layout' : true
  });

  app.use(express.cookieParser('my secret here'));
  app.use(express.bodyParser());

  app.use(express.methodOverride());
  app.use(app.router);

  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.render('index', { token : oauthToken });
});

app.get('/twitter/oauth', function() {
  console.log(req.body);
  res.end('<h1>What whaat?!</h1>');
});

https.createServer(options, app).listen('3200');
http.createServer(app).listen('3000');

console.log( 'HTTP  - Express started on port %d', 3000 );
console.log( 'HTTPS - Express started on port %d', 3200 );
