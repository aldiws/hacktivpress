var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

mongoose.Promise = global.Promise

var dbUri = `mongodb://localhost/hacktivpress`
mongoose.connect(dbUri, err => {
  err ? console.log(err) : console.log(`database connected`)
})

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', require('./routes/index'));
app.use('/api/users',require('./routes/users'));
app.use('/api/articles', require('./routes/articles'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
  console.log(err)
});

module.exports = app;
