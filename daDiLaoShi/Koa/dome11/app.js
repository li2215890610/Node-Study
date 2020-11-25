const koa = require("koa");
const koaRouter = require("koa-router")();
const DB = require("./module/db")
const app = new koa();

koaRouter.get('/', async (ctx)=>{
  const data = await DB.find('admin',{})
  console.log(data);
  ctx.body = '首页'
})

koaRouter.get('/news', async (ctx)=>{

  ctx.body = 'news'
})

// koaRouter.routes() 启动路由
// koaRouter.allowedMethods() //作用：这是官方文档的推荐用法，我们可以看到 koaRouter.allowedMethods()，在
// koaRouter.routes() 之后使用，所以是在所有中间件最后调用此时根据 ctx.status 设置 response 响应头
app.use(koaRouter.routes(), koaRouter.allowedMethods())

app.listen(10086,()=>{
  console.log("serve run dev 10086");
})