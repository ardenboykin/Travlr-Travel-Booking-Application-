var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import routers for each section of the site
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
// Create variable for API routes
var apiRouter = require('./app_api/routes/index');
// Import handlebars to enable partial registration
var handlebars = require('hbs');

// Connect to the MongoDB database via Mongoose - updated path after moving models to app_api
require('./app_api/models/db');

var app = express();

// Point Express to the app_server views folder for template rendering
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Register handlebars partials so header and footer can be reused across views
handlebars.registerPartials(__dirname + '/app_server/views/partials');

// Set handlebars as the templating engine
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers to their respective URL paths
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);

// Wire-up API routes
app.use('/api', apiRouter);

// Catch 404 errors and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler - only exposes full error details in development
app.use(function(err, req, res, next) {
  // Set locals, only providing error stack in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page with the error status code
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;