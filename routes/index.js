var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

var fs = require('fs');



// router.use(function(req,res,next) {
//   var path = req.path;
//   console.log('path: ' + __dirname + '/public' + path);
//   fs.stat(__dirname + '/public' + path, function(err, stats) {
//   	if(!err) {
//   		console.log('no error in stat');
//   		res.sendFile(__dirname + '/public' + path);
//   	} else {
//   		next();
//   	}
//   });
// });



router.get('/', function (req, res) {
  
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

// router.get('/stylesheets/style.css', function(req, res) {
// 	res.sendFile('/Users/mbingber/Desktop/Fullstack/week2/twitter-js/public/stylesheets/style.css');
// });

module.exports = router;