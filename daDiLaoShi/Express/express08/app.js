const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const app = express();

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
  store: new MongoStore({                 //user12345 用户名，foobar 密码，表名
    url: 'mongodb://127.0.0.1:27017/shop',//'mongodb://user12345:foobar@localhost/shop',
  })
}))


app.get('/',(req,res)=>{
  //获取session
  if (!req.session.username) {
    res.send(`未登陆`)
    return 
  }
  res.send(`${req.session.username}   已登陆`)
})

app.get('/login',(req,res)=>{
  //设置 session 
  req.session.username = "章三11";
  res.send("login")
})

app.get('/loginOut',(req,res)=>{
  //1. 设置session过期时间设置成0
  //这样不太好，会把所有的session给搞成失效
  // req.session.cookie.maxAge = 0;

  //2. 销毁指定 session
  req.session.username = '';
  req.session.destroy((err)=> {
    res.send("loginOut")
  })
})

app.listen(10086,()=> console.log("server node run"))