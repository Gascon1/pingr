var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var Requests = require('./routes/get_requests');
var Users = require('./routes/get_users');
var Business = require('./routes/get_businesses');
var ActiveRequests = require('./routes/get_active_requests_by_user');
var ExpiredRequests = require('./routes/get_expired_requests_by_user');


var CreateRequests = require('./routes/post_create_requests');
var CreateUsers = require('./routes/post_create_users');



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
app.use('/requests', Requests);
app.use('/users', Users);
app.use('/businesses', Business)
app.use('/create_requests', CreateRequests);
app.use('/create_users', CreateUsers);




app.get('/api/active_requests', require('./Controllers/get_active_requests_by_user.js'))
app.get('/api/expired_requests', require('./Controllers/get_expired_requests_by_user.js'))
app.get('/api/requests', require('./Controllers/get_requests.js'))
app.get('/api/users', require('./Controllers/get_users.js'))
app.get('/api/businesses', require('./Controllers/get_businesses.js'))



app.post('/api/create_requests', require('./Controllers/post_create_requests.js'))
app.post('/api/create_users', require('./Controllers/post_create_users.js'))



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
