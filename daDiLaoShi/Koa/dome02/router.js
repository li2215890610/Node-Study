var koa = require("koa");
var koaRouter = require("koa-router")(); //引入实例化路由  省去这一步 var koaRouter = new Router()

var app = new koa();

koaRouter.get('/', async (ctx,next)=>{
  ctx.body = '这是首页';
})

koaRouter.get('/news',async (ctx,next)=>{
  ctx.body = '新闻页面 ';
})

koaRouter.get('/news/:id',async (ctx,next)=>{
  ctx.body = '新闻详情 ';
})


// koaRouter.routes() 启动路由
// koaRouter.allowedMethods() //作用：这是官方文档的推荐用法，我们可以看到 koaRouter.allowedMethods()，在
// koaRouter.routes() 之后使用，所以是在所有中间件最后调用时根据 ctx.status 设置 response 响应头
app.use(koaRouter.routes(),koaRouter.allowedMethods())

app.listen(10086,()=>{
  console.log('server run 10086');
})
