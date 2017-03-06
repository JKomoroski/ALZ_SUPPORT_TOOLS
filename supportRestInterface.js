var express = require('express');
var app = express();

var rest = require('./rest/rest.js') //Rest endpoints are defined in the /rest/rest.js file
app.use('/rest', rest)

app.use(express.static('public')) //Static FIles to host from the machine go in the Public directory

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.listen(3000, function(){
  console.log('App Listening on port 3000')
})