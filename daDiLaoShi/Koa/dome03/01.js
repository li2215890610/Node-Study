var koa = require("koa");
var koaRouter = require("koa-router")();

var app = new koa();

//koa 中间件
//匹配所有路由之前 执行中间件
app.use(async (ctx,next)=>{
  console.log(new Date());

  await next() //当前路由匹配完成以后，继续往下匹配 
})
koaRouter.get("/", async (ctx,next)=>{
  console.log('222');
  ctx.body = '这是首页';
})

koaRouter.get('/news',async (ctx,next)=>{
  ctx.body = `新闻详情`;
})

app.use(koaRouter.routes(),koaRouter.allowedMethods())
app.listen(10086,()=>{
  console.log("server run dev 10086");
})
