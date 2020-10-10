const express = require("express");
const appRouter = express.Router();
const userRouter = require("./user");
const navRouter = require("./nav");
const loginRouter = require("./login");

appRouter.get('/',(req,res)=>{
  //req.qurey //获取get传值
  console.log(req.query);
  res.render("login")
})

// 挂载
appRouter.use('/user',userRouter);
appRouter.use('/nav',navRouter);
appRouter.use('/',loginRouter);

module.exports = appRouter;