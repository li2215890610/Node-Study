const koa = require("koa");
const koaRouter = require("koa-router")();
const views = require('koa-views');
const app = new koa();

//配置模版引擎中间件 ejs模版
// app.use(views("views", { map: { html: 'ejs' } })); //配置这种模版引擎 views里面的文件必须是 html 后缀
app.use(views("views", { extension: 'ejs' }));// 配置这种模版引擎 views里面的文件必须是 ejs 后缀

//写一个中间件 配置公共信息
app.use(async (ctx,next)=>{
  ctx.state.userinfo = "张三" //公共ejs模版
  await next()
})

koaRouter.get("/", async (ctx) => {
  await ctx.render('index',{
    title: '我是title'
  })
})

koaRouter.get("/news", async (ctx) => {
 await ctx.render('news',{
    title: '这是一个页面'
  })
})

app.use(koaRouter.routes(), koaRouter.allowedMethods())

app.listen(10086, () => {

  console.log("server run dev");
})