var express = require('express')
var ejs = require('ejs')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', ejs.renderFile); 

app.get('/', function (req, res) {
  res.render('index.html')
});
 
app.listen(5000);