var koa = require("koa");
var koaRouter = require("koa-router")(); //引入实例化路由  省去这一步 var koaRouter = new Router()

var app = new koa();

koaRouter.get('/', async (ctx,next)=>{
  ctx.body = '这是首页';
})

//获取get传值
koaRouter.get('/news',async (ctx,next)=>{

  //从 ctx  读取get传值
  console.log(ctx.query); // 获取的是对象
  console.log(ctx.querystring); // 获取的是字符串
  console.log(ctx.url); // 获取请求地址


  //从 ctx 里面 request 获取传值
  console.log(ctx.request.url);//获取url
  console.log(ctx.request.query);//获取传值 对象
  console.log(ctx.request.querystring);//获取传值 字符串

  ctx.body = '新闻页面 ';
})

//获取动态路由的传值
koaRouter.get('/news/:id',async (ctx,next)=>{
  ctx.body = `新闻详情 ${ctx.params.id}`;
})
koaRouter.get('/news/:id/:title',async (ctx,next)=>{
  ctx.body = `
  新闻详情 
  id:    ${ctx.params.id}
  title: ${ctx.params.title}
  `;
})

// koaRouter.routes() 启动路由
// koaRouter.allowedMethods() //作用：这是官方文档的推荐用法，我们可以看到 koaRouter.allowedMethods()，在
// koaRouter.routes() 之后使用，所以是在所有中间件最后调用时根据 ctx.status 设置 response 响应头
app.use(koaRouter.routes(),koaRouter.allowedMethods())

app.listen(10086,()=>{
  console.log('server run 10086');
})
