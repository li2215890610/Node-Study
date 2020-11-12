var koa = require("koa");
var koaRouter = require("koa-router")();

var app = new koa();

koaRouter.get("/", async (ctx,next)=>{
  ctx.body = '这是首页';
})

//匹配到路由之后 继续向下匹配
koaRouter.get('/news',async (ctx,next)=>{
  ctx.body = `这是一个新闻`;
  next()
})

koaRouter.get('/news',async (ctx,next)=>{
  ctx.body = `
  中间件匹配
  这是一个新闻`;
})

app.use(koaRouter.routes(),koaRouter.allowedMethods())
app.listen(10086,()=>{
  console.log("server run dev 10086");
})
