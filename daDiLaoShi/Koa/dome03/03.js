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
  ctx.body = '这是首页';
})

koaRouter.get('/news',async (ctx)=>{
  console.log("进入 /news 2");
  ctx.body = `这是一个新闻`;
})

//错误处理中间件 
// 与Express 不同到是 Express是按顺序执行，如果没有匹配到直接进入404错误中间件详细看daDiLaoShi/Express/express04/app.js
//而 Koa 是进入路由之后首先匹配 中间件，然后执行对应到路由，对应的路由执行完成之后，在回到中间件执行 next();下面的代码， 而我们想执行错误处理中间件必须判断写上404
app.use(async (ctx,next)=>{
  // 进来中间件了
  console.log('进来中间件了1');
  next(); 
  if(ctx.status==404){ //如果页面找不到 
    ctx.status = 404; 
    ctx.body="这是一个 404 页面" 
  }
  // else{
  //   // 打开注释 访问news 查看效果
  //   console.log(ctx.url,'url ___  3');
  // }
})

app.use(koaRouter.routes(),koaRouter.allowedMethods())
app.listen(10086,()=>{
  console.log("server run dev 10086");
})
