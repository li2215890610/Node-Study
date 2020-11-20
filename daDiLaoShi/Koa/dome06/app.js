var koa = require("koa");
var koaRouter = require("koa-router")();
const views = require('koa-views');
const bodyParser = require("koa-bodyparser");
const static = require('koa-static');
const path = require("path");
const app = new koa();


//配置模版引擎中间件 ejs模版
app.use(views("views", { extension: 'ejs' }));// 配置这种模版引擎 views里面的文件必须是 ejs 后缀

app.use(bodyParser());

app.use(static( path.join( __dirname, 'public') ))

koaRouter.get('/', async (ctx,next)=>{

  await ctx.render('index')
})

//接收post提交的数据
koaRouter.post('/doAdd',async (ctx,next)=>{
  ctx.body = ctx.request.body;
})

// koaRouter.routes() 启动路由
// koaRouter.allowedMethods() //作用：这是官方文档的推荐用法，我们可以看到 koaRouter.allowedMethods()，在
// koaRouter.routes() 之后使用，所以是在所有中间件最后调用此时根据 ctx.status 设置 response 响应头
app.use(koaRouter.routes(),koaRouter.allowedMethods())

app.listen(10086,()=>{
  console.log('server run 10086');
})
