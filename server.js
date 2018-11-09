var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

app.listen('3333');
console.log('Running on localhost:3333');