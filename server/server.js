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

app.use(express.static(path.join(__dirname, '../')));
app.use('/main', express.static(path.join(__dirname, '../main.html')));

app.listen(8080);
