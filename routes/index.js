var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

var fs = require('fs');

module.exports = function(io) {
	router.get('/', function (req, res) {
	  
	  var tweets = tweetBank.list();
	  res.render( 'index', { title: 'Welcome to Twitter.js', tweets: tweets, showForm: true,
	  profile: false } );
	});

	router.get('/users/:name', function(req, res) {
	  var name = req.params.name;
	  var list = tweetBank.find( {name: name} );
	  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, 
	  	showForm: true, name: name, profile: true } );
	});

	router.post('/submit', function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
	  tweetBank.add(name, text);
	  io.sockets.emit('new_tweet', { name: name, text: text });
	  
	  // res.redirect('/');
	});

	return router;
}
