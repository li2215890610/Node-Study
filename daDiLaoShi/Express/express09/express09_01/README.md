### P34 07、【Express教程】Express大型企业级架构之路由模块化 以及Express应用程序生成器

#### Express 路由模块化

express 中允许我们通过express，Router 创建模块化的路由处理程序。

```
//新建 routes 文件 保存部分路由
//routes/login.js

const express = require("express");
const appRouter = express.Router();

appRouter.get('/',(req,res)=>{
  //req.qurey //获取get传值
  console.log(req.query);
  res.render("form")
})
appRouter.post('/doLogin',(req,res)=>{
  //req.body //配置 body-parser， 获取post传值 
  console.log(req.body);
  res.send("success")
})
//导出
module.exports = appRouter;

// 回到app.js 挂载路由

//引入外部路由 
const loginRouter = require("./routes/login")

//挂载 login模块 
//当访问 /login的时候 默认去加载 routes/login.js 文件里面的 ·/· 这个路由
//而我们访问路由内部为这个样子 /login/， /login/doLogin
app.use('/login', loginRouter)

```