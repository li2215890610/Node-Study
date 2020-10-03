### P33 06、【Express教程】express-session 多服务器负载均衡 session保存到数据库

#### 安装 connect-mongo
[connect-mongo](https://www.npmjs.com/package/connect-mongo)

```
npm install connect-mongo --save
```

#### 使用 connect-mongo
[connect-mongo](https://www.npmjs.com/package/connect-mongo)

[connect-redis也可以存储session](https://www.npmjs.com/package/connect-redis)

```
//引入
const MongoStore = require("connect-mongo")(session);

/**
//在 配置 session  中间件里面加入 store
// shop 表名
store: new MongoStore({ //127.0.0.1:27017 数据库地址与密码  //user12345 用户名，foobar 密码，表名
  url: 'mongodb://127.0.0.1:27017/shop', //'mongodb://user12345:foobar@localhost/shop',
})
**/

//配置 session 
app.use(session({
  name: 'yang', //session key 名称, 修改的是 浏览器Application  cookie 里面存储的key
  secret: 'keyboard cat', //生成服务端的签名 
  resave: false, // 强制存储 session 即使没有变化
  saveUninitialized: true, // 强制将未初始化的 session 存储
  cookie: { 
    //这里面的参数和 cookie-parser一样
    maxAge: 1000* 60, // session 过期时间
    secure: false,  //true cookie 在http中是无效的，false 在https中是有效的
  },
  rolling: true,// 如果session maxAge=60,我们去访问还没有过期，并且rolling为true,当客户端访问的时候，会重置 maxAge=60重新计时
  // shop 表名
  store: new MongoStore({
    url: 'mongodb://127.0.0.1:27017/shop',//'mongodb://user12345:foobar@localhost/shop',
    touchAfter: 24 * 3600 //不管发生多少请求，在24小时内只更新一次session，除非改变了session
  })
}))
```

#### 查看数据库数据
```
node app.js// 启动程序创建 session
```
连接数据库  mongod 
操作数据库  mongo
```
show dbs //查看是否存在 保存session的数据库 shop
show collections // 查看表是否存在 sessions 表
db.sessions.find() // 查看是否存在数据，如果存在就说名插入数据库成功
```
