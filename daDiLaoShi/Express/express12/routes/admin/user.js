const express = require("express");
const appRouter = express.Router();
const tools = require("../../model/tools");

//一次上传多个图片 多个参数

appRouter.get('/',(req,res)=>{
  //req.qurey //获取get传值
  console.log(req.query);
  res.send("用户列表")
})

appRouter.get('/add',(req,res)=>{
  res.render('admin/user/add')
})

appRouter.get('/edit',(req,res)=>{
  console.log(req.body);
  res.send("edit 修改用户")
})

const cpUpload = tools.multer().fields([{ name: 'pic1', maxCount: 1 }, { name: 'pic2', maxCount: 1 }])

appRouter.post('/doAdd', cpUpload ,(req,res)=>{
  //req.body //配置 body-parser， 获取post传值 
  console.log(req.body);
  console.log(req.file);
  res.send({
    body:req.body,
    file:req.files,
    message: "doAdd 增加用户"
  })
})

appRouter.post('/doEdit',(req,res)=>{
  //req.body //配置 body-parser， 获取post传值 
  console.log(req.body);
  res.send("doEdit 修改用户")
})

module.exports = appRouter;