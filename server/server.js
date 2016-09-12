"use strict";
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const fs = require('fs');
const tumblr = require('tumblr');
const bodyParser = require('body-parser');
const apikeys = require('./apikeys');
const request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const client = tumblr.createClient({
// 	consumer_key: apikeys.tumblr.consumer_key
// });

app.use(express.static(path.join(__dirname, '../')));
app.use('/main', express.static(path.join(__dirname, '../main.html/')));
//app.use(express.static(path.join(__dirname, 'main.html')));

// app.get('/tumblr', function(req, res){
// 	request.get('api.tumblr.com/v2/blog/mermaidcreek.tumblr.com/posts/?api_key=${apikeys.tumblr.consumer_key}', function (err, response, body) {
// 		console.log(body)
// 		res.send(body);
//   });
// })

// app.get('/instagram', function(req, res){
// 	request.get('https://api.instagram.com/v1/users/lucysour/media/recent/?client_id=${apikeys.instagram.api_key}', function (err, data) {
// 		console.log(data)
// 		res.send(data);
//   });
// })



app.listen(8080);
