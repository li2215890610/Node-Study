const koa = require("koa");
const router = require("koa-router")();
const render = require('koa-art-template');
const path = require("path");
//引入子路由
const admin = require("./routes/admin");
const api = require("./routes/api");

const app = new koa();


//模版引擎配置路径
render(app, {
  root: path.join(__dirname, 'views'),  //文件存放位置
  extname: '.html',  //文件后缀名
  debug: process.env.NODE_ENV !== 'production', //是否开启调试模式
});

//配置路由
router.get('/', async (ctx)=>{
  ctx.body = '首页'
})

//admin 配置子路由 或者说是 层级路由
router.use('/admin',admin.routes())

//
router.use('/api',api.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(10086,()=>{
  console.log('server run 10086');
})


