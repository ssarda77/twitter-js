var express = require('express');
var swig = require('swig');
var routes = require('./routes/');
var morgan = require('morgan');
var app = express();



app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname + '/views');
swig.setDefaults({cache: false});

app.use(morgan(':method :url :status'));

app.use(express.static(__dirname + '/public'));


app.use('/', routes);

app.listen(3000, function() {
	console.log("listening..");
})