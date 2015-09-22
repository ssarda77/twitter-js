var express = require('express');
var swig = require('swig');
var app = express();

var router = express.Router();

app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname + '/views');
swig.setDefaults({cache: false});

router.use(function(req, res, next) {
	console.log(req.method + ' ' + req.url);
	next();
})

router.get('/', function(req, res) {
	//res.send('hello world');
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
	// res.send(swig.renderFile('./views/index.html', {title: "An Example", 
	// 		people: {P1: {name: "Gandalf"}, 
	// 				 P2: {name: "Frodo"}, 
	// 				 P3: {name: "Hermione"} }
	// 		}));
})

router.get('/news', function(req, res) {
	res.send('this is the news!');
})


app.use(router);

app.listen(3000, function() {
	console.log("listening..");
})