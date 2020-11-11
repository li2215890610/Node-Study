var koa = require("koa");
var Router = require("koa-router");

var app = new koa();
var koaRouter = new Router();

koaRouter.get('/', async (ctx,next)=>{
  ctx.body = '这是首页';
}).get('/news',async (ctx,next)=>{
  ctx.body = '这是news';
})

// koaRouter.routes() 启动路由
// koaRouter.allowedMethods() //作用：这是官方文档的推荐用法，我们可以看到 koaRouter.allowedMethods()，在
// koaRouter.routes() 之后使用，所以是在所有中间件最后调用此时根据 ctx.status 设置 response 响应头
app.use(koaRouter.routes(),koaRouter.allowedMethods())

app.listen(10086,()=>{
  console.log('server run 10086');
})
