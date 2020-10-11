const express = require("express");
const appRouter = express.Router();
const tools = require("../../model/tools");
//一次上传多个图片 一个参数

appRouter.get('/',(req,res)=>{
  //req.qurey //获取get传值
  console.log(req.query);
  res.render("admin/multiple/add")
})

//封装 multer
appRouter.post('/doAdd', tools.multer().array('pics',3), (req,res)=>{
  //req.body //配置 body-parser， 获取post传值 
  console.log(req.files);
  const body = req.body;
  res.send({...body,file:req.files})
})


module.exports = appRouter;