var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require("fs");
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require("express-session");
const RedisStore = require("connect-redis")(session); //写入 redis 
const redisClient = require("./db/redis")


const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');


const sessionStore = new RedisStore({
  client: redisClient
})

var app = express();

app.use(session({
  secret:"XX_@_EE_#_YANG", //密钥
  cookie: {
    path:"/", //所有路径都可以用
    httpOnly: true,// 前端JS 不能修改 
    maxAge: 24 * 60 * 60 * 1000
  },
  store: sessionStore, // 爸session 存储到 redis
}))

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

//书写日志
const env = process.env.NODE_ENV; // 获取环境参数
if (env !== 'production') {
  //这个值不写也可以 因为不写也是默认值就是这样
  // {
  //   stream: process.stdout
  // }
  app.use(logger('dev')); 
}else{
  // 线上环境
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  
  app.use(logger('combined', {
    stream: writeStream
  }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);


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
