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

module.exports = appRouter;