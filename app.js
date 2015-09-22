var express = require('express');
var app = express();

var router = express.Router();

router.use(function(req, res, next) {
	console.log(req.method + ' ' + req.url + ' ' + res.statusCode);
	next();
})

router.get('/', function(req, res) {
	res.send('Hello World');
})

router.get('/news', function(req, res) {
	res.send('this is the news!');
})


app.use(router);

app.listen(3000, function() {
	console.log("listening..");
})