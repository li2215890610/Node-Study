const koa = require("koa");
const koaRouter = require("koa-router")();
const render = require('koa-art-template');
const static = require('koa-static');
const path = require("path");
const session = require("koa-session");
const app = new koa();


render(app, {
  root: path.join(__dirname, 'views'),  //文件存放位置
  extname: '.html',  //文件后缀名
  debug: process.env.NODE_ENV !== 'production', //是否开启调试模式
});

//配置session的中间件
app.keys = ['some secret hurr']; //cookie 的签名
const CONFIG = {
  key: 'koa.sess', /**默认签名**/
  maxAge: 86400000,/**过期时间        【需要修改】**/
  overwrite: true, /**默认 true**/
  httpOnly: true, /**true 表示只有服务器端可以获取，false 浏览器、服务器都可以获取**/
  signed: true, /**默认 true**/
  rolling: false, /** true 每次访问都重新设置 session**/
  renew: true, /**  当session快过期当时候，重新设置session      【需要修改】**/
  signed: true, /** 加密 **/
};
 
app.use(session(CONFIG, app));

app.use(static(path.join(__dirname, 'public')))

koaRouter.get("/login", async (ctx) => {
  ctx.session.userinfo = '张三'
  ctx.body = "登陆成功"
  ctx.redirect("/news")
})


koaRouter.get("/", async (ctx) => {
  const name = ctx.session.userinfo;
  let list = {
    name
  }
  await ctx.render("index", { list })
})


koaRouter.get("/news", async (ctx) => {
  const name = ctx.session.userinfo;
  let app = {
    name
  };
  await ctx.render('news', {
    list: app
  });
})

// koaRouter.routes() 启动路由
// koaRouter.allowedMethods() //作用：这是官方文档的推荐用法，我们可以看到 koaRouter.allowedMethods()，在
// koaRouter.routes() 之后使用，所以是在所有中间件最后调用此时根据 ctx.status 设置 response 响应头
app.use(koaRouter.routes(), koaRouter.allowedMethods())

app.listen(10086, () => {
  console.log("server run dev");
})
