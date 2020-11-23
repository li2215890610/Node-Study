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
  //koa中没法直接设置中文 需要用 Buffer 转换
  const buffer = new Buffer("张三").toString("base64")
  ctx.cookies.set('userinfo',buffer,{
    maxAge: 1000 * 20, //多长时间后过期
  })
  let list = {
    name: '张三',
  }
  await ctx.render("index", { list })
})


koaRouter.get("/news", async (ctx) => {
  console.log(ctx.cookies.get("userinfo"));
  const buffer = new Buffer(ctx.cookies.get("userinfo"),'base64').toString()
  let app = {
    name: `cookies ______ ${buffer}`,
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
