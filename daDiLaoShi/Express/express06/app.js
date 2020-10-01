const express = require('express');
const cookie = require("cookie-parser");
const app = express();
const cookieParser = require('cookie-parser');

//配置中间件
//baidu.com 为了写入加密数据密钥
app.use(cookieParser("baidu.com"));


app.get('/', (_, res) => {
  // 设置cookie 
  //如果cookie 没有过期的话，就算是关闭浏览器从新打开也能访问

  //domain 多个域名共享 cookie
  // 在 jinjuxiaodian 域名下 以下两个地址共享 cookie
  // https://passport.jinjuxiaodian.com/reg  
  // https://sc.jinjuxiaodian.com/ v3/
  res.cookie("username", "zhangsan", {
    maxAge: 1000 * 20,  //设置多久过期 单位为毫秒
    // path: `/article`,//设置那些路由可以使用 cookie
    // domain: `.jinjuxiaodian.com`,
    // httpOnly: true, true 只能在后端使用，false 都可以使用,
    // secure: true, // true cookie 在http中是无效的，false 在https中是有效的
    /***
     * signed 
     *  1、配置中间件的时候需要传入加密的参数
     *  app.use(cookieParser('ssss'));
     *  2、 设置cookie 
     *  signed: true,/
     *  3、获取cookie 
     * req.signedCookies()
     **/
    signed: true,//cookie 加密   
  })
  
  res.send('Hello World!')
})

app.get('/article', (req, res) => {
  //获取未加密cookie
  const username = req.cookies.username;
  console.log(username);
  res.send(`新闻页面!______ ${username}`)
})

app.get('/user', (req, res) => {
  //获取未加密cookie
  const username = req.cookies.username;
  console.log(username);

  res.send(`用户页面 !______ ${username}`)
})

app.get('/product', (req, res) => {
  //获取加密cookie
  const username = req.signedCookies.username;
  console.log(username);

  res.send(`用户页面 !______ ${username}`)
})

app.listen(10086, () => console.log(`node server 10086 run`))