const koa = require("koa");
const koaRouter = require("koa-router")();
const render = require('koa-art-template');
const static = require('koa-static');
const bodyParser = require("koa-bodyparser");
const path = require("path");
const DB = require("./module/db");
const app = new koa();

render(app, {
  root: path.join(__dirname, 'views'),  //文件存放位置
  extname: '.html',  //文件后缀名
  debug: process.env.NODE_ENV !== 'production', //是否开启调试模式
});

//post提交数据
app.use(bodyParser());

//静态资源存放位置
app.use(static(path.join(__dirname, 'static')))


koaRouter.get("/" || "/add", async (ctx) => {
  await ctx.render("index")
})

koaRouter.post("/add", async (ctx) => {

  const { password, username} = ctx.request.body
  if (!password || !username) {
    ctx.body = '请输入正确数据'
    return
  }

  const data = await DB.find('admin',{ username})
  if (data.length) {
    ctx.body = "添加失败：因为用户名存在，不可重复添加";
    return
  }

  const { result } = await DB.insert('admin',ctx.request.body)

  if (result.ok === 1) {
    ctx.redirect("/list")
  }else{
    ctx.body = "增加失败";
  }
})

koaRouter.get("/delect", async (ctx)=>{
  const { _id} = ctx.request.query
  if (!_id) {
    ctx.body = "删除失败";
    return 
  }
  const { result } = await DB.delect('admin',{
    _id: DB.getObjectID(_id)
  })
  if (result.ok === 1) {
    ctx.redirect("/list")
  }else{
    ctx.body = "删除失败";
  }
})

koaRouter.get('/edit/:id', async (ctx)=>{ 
  const { id} = ctx.request.params;
  const [ findData] = await DB.find('admin',{
    _id: DB.getObjectID(id)
  })
  await ctx.render('edit',{
    username: findData.username,
    password: findData.password
  });
})

koaRouter.get('/edit', async (ctx)=>{ 
  await ctx.render('edit');
})

koaRouter.post("/edit", async (ctx) => {
  const { password, username, oldUsername, oldPassword} = ctx.request.body

  const findUsername = await DB.find('admin',{ username: oldUsername, password: oldPassword})

  if (!findUsername.length) {
    ctx.body = "添加失败：因为用户名不存在，不可修改";
    return 
  }

  const { result} = await DB.update('admin',{
    username: oldUsername,
    password: oldPassword
  },{
    username,
    password
  })

  if (result.ok === 1) {
    ctx.redirect("/list")
  }else{
    ctx.body = "修改失败";
  }
})

koaRouter.get("/list", async (ctx) => {
  const list = await DB.find('admin',{})
  await ctx.render('list', {
    list
  });
})



// koaRouter.routes() 启动路由
// koaRouter.allowedMethods() //作用：这是官方文档的推荐用法，我们可以看到 koaRouter.allowedMethods()，在
// koaRouter.routes() 之后使用，所以是在所有中间件最后调用此时根据 ctx.status 设置 response 响应头
app.use(koaRouter.routes(), koaRouter.allowedMethods())

app.listen(10086, () => {
  console.log("server run dev");
})
