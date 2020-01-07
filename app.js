var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var ActiveRequests = require('./routes/get_active_requests_by_user');
var ExpiredRequests = require('./routes/get_expired_requests_by_user');
var businesses = require('./routes/businesses');
var categories = require('./routes/categories');
var users = require('./routes/users');
var statuses = require('./routes/statuses');
var services = require('./routes/services');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/active_requests', ActiveRequests);
app.use('/expired_requests', ExpiredRequests);
app.use('/businesses', businesses);
app.use('/categories', categories);
app.use('/users', users);
app.use('/statuses', statuses);
app.use('/services', services);

app.get('/api/active_requests', require('./Controllers/get_active_requests_by_user.js'))
app.get('/api/expired_requests', require('./Controllers/get_expired_requests_by_user.js'))
app.get('/api/businesses', require('./Controllers/businesses.js'))
app.get('/api/categories', require('./Controllers/categories.js'))
app.get('/api/users', require('./Controllers/users.js'))
app.get('/api/statuses', require('./Controllers/statuses.js'))
app.get('/api/services', require('./Controllers/services.js'))



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
