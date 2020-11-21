const koa = require("koa");
const koaRouter = require("koa-router")();
const render = require('koa-art-template');
const static = require('koa-static');
const path = require("path");
const app = new koa();


render(app, {
  root: path.join(__dirname, 'views'),  //文件存放位置
  extname: '.html',  //文件后缀名
  debug: process.env.NODE_ENV !== 'production', //是否开启调试模式
});

app.use(static(path.join(__dirname, 'public')))

koaRouter.get("/", async (ctx) => {
  let list = {
    name: '张三',
    h: '<h2>这是一个h2</h2>',
    num: 20,
    data: ['11111111', '2222222222', '33333333333']
  }
  await ctx.render("index", { list })
})


koaRouter.get("/news", async (ctx) => {
  let app = {
    name: '张三11',
    h: '<h2>这是一个h211</h2>',
    num: 20,
    data: ['11111111', '2222222222', '33333333333']
  };
  await ctx.render('news', {
    list: app
  });
})

// koaRouter.routes() 启动路由
// koaRouter.allowedMethods() //作用：这是官方文档的推荐用法，我们可以看到 koaRouter.allowedMethods()，在
// koaRouter.routes() 之后使用，所以是在所有中间件最后调用此时根据 ctx.status 设置 response 响应头
app.use(koaRouter.routes(), koaRouter.allowedMethods())

app.listen(10086, () => {
  console.log("server run dev");
})
