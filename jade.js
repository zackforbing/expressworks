var express = require('express')
var app = express()
app.set('view engine', 'jade')
app.set('views', process.argv[3]) // path goes here, ex: pp.set('views', path.join(__dirname, 'templates'))
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2]) // port number
