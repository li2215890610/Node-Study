var koa = require("koa");
var koaRouter = require("koa-router")();

var app = new koa();

//这是第一个中间件
app.use(async (ctx,next)=>{
  // 进来中间件了
  console.log('1 这是第一个中间件');
  await next(); 
  console.log(7,'匹配路由完成之后 又会返回执行中间件');
})


//这是第二个中间件
app.use(async (ctx,next)=>{
  // 进来中间件了
  console.log('2 这是第二个中间件');
  await next(); 
  console.log(6,'匹配路由完成之后 又会返回执行中间件');
})

koaRouter.get("/", async (ctx,next)=>{
  ctx.body = '这是首页';
})

koaRouter.get('/news',async (ctx)=>{
  console.log(' 4 匹配到了news 这个路由');
  ctx.body = `这是一个新闻`;
})


//这是第三个中间件
app.use(async (ctx,next)=>{
  // 进来中间件了
  console.log('3 这是第三个中间件');
  await next(); 
  console.log(5,'匹配路由完成之后 又会返回执行中间件');
})

app.use(koaRouter.routes(),koaRouter.allowedMethods())
app.listen(10086,()=>{
  console.log("server run dev 10086");
})
