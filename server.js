var express = require('express'),
    app = module.exports = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(express.cookieParser('my secret here'));
  app.use(express.bodyParser());

  app.use(express.methodOverride());
  app.use(app.router);

  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.render('index', {});
});


app.listen('3000');

console.log( 'Express started on port %d', 3000 );
