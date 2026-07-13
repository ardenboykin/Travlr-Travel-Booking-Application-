var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./app_server/routes/index');
app.use('/', routes);

app.listen(3000, function() {
  console.log('Server running on port 3000');
});