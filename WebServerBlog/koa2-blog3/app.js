const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require("koa-generic-session");
const redisStore = require("koa-redis");
const redis = require("redis");
const { REDIS_CONF } = require("./conf/db")
const path = require("path");
const fs = require("fs");
const morgan = require("koa-morgan")

const index = require('./routes/index')
const users = require('./routes/users')
const blogs = require("./routes/blogs")
// const views = require('koa-views')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// app.use(require('koa-static')(__dirname + '/public'))
// app.use(views(__dirname + '/views', {
//   extension: 'pug'
// }))

// session 配置
app.keys = ['XX_@_EE_#_YANG']; //session 加密
app.use(session({
  //配置 cookie
  cookie: {
    path:'/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  // 配置redis 
  store: redisStore({
    all:`${REDIS_CONF.host}:${REDIS_CONF.port}`, //redis 连接地址与端口
  })
}))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


//书写日志
const env = process.env.NODE_ENV; // 获取环境参数
if (env !== 'production') {
  //这个值不写也可以 因为不写也是默认值就是这样
  // {
  //   stream: process.stdout
  // }
  app.use(morgan('dev')); 
}else{

  // 线上环境
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  
  app.use(morgan('combined', {
    stream: writeStream
  }));
}


// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(blogs.routes(), blogs.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
