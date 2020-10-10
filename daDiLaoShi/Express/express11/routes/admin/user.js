const express = require("express");
const appRouter = express.Router();

appRouter.get('/',(req,res)=>{
  //req.qurey //获取get传值
  console.log(req.query);
  res.send("用户列表")
})

appRouter.get('/add',(req,res)=>{
  console.log(req.body);
  res.send("add 增加用户")
})

appRouter.get('/edit',(req,res)=>{
  console.log(req.body);
  res.send("edit 修改用户")
})

appRouter.post('/doAdd',(req,res)=>{
  //req.body //配置 body-parser， 获取post传值 
  console.log(req.body);
  res.send("doAdd 增加用户")
})

appRouter.post('/doEdit',(req,res)=>{
  //req.body //配置 body-parser， 获取post传值 
  console.log(req.body);
  res.send("doEdit 修改用户")
})

module.exports = appRouter;