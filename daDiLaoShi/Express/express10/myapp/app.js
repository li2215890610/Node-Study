var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');// 日志中间件

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//指定ejs模版
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));// 挂载日志中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());// 配置cookie
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

// https://blog.csdn.net/qq_44977477/article/details/106781319
process.env.PORT = 10086;

module.exports = app;
