#### P53 11【koa教程】Koa2 Session 的使用

##### 安装 及 地址

[koa-session](https://www.npmjs.com/package/koa-session)
```
npm install koa-session --save
```

##### 使用
```
const session = require("koa-session");


//配置session的中间件
app.keys = ['some secret hurr']; //cookie 的签名
const CONFIG = {
  key: 'koa.sess', /**默认签名**/
  maxAge: 86400000,/**过期时间        【需要修改】**/
  overwrite: true, /**默认 true**/
  httpOnly: true, /**true 表示只有服务器端可以获取，false 浏览器、服务器都可以获取**/
  signed: true, /**默认 true  一个布尔值, 表示是否要对 cookie 进行签名 (默认为 false). 如果为 true, 则还会发送另一个后缀为 .sig 的同名**/
  rolling: false, /** true 每次访问都重新设置 session**/
  renew: true, /**  当session快过期当时候，重新设置session      【需要修改】**/
};
 
app.use(session(CONFIG, app));


//设置session
koaRouter.get("/login", async (ctx) => {
  ctx.session.userinfo = '张三'
  ctx.body = "登陆成功"
  ctx.redirect("/news")
})

//使用
koaRouter.get("/news", async (ctx) => {
  const name = ctx.session.userinfo;
  let app = {
    name
  };
  await ctx.render('news', {
    list: app
  });
})
```