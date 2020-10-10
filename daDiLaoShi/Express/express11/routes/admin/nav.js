const express = require("express");
const appRouter = express.Router();
const tools = require("../../model/tools");


appRouter.get('/',(req,res)=>{
  //req.qurey //获取get传值
  console.log(req.query);
  res.send("导航列表")
})

appRouter.get('/add',(req,res)=>{
  console.log(req.body);
  res.render("admin/nav/add")
})

appRouter.get('/edit',(req,res)=>{
  console.log(req.body);
  res.send("edit 修改导航")
})

// upload.single('pic') 
// pic 接受的参数名必须和客户端传过来的一样 
// appRouter.post('/doAdd', upload.single('pic'), (req,res)=>{
//   //req.body //配置 body-parser， 获取post传值 
//   console.log(req.body);
//   const body = req.body;
//   res.send({...body,file:req.file})
// })


//封装 multer
appRouter.post('/doAdd', tools.multer().single('pic'), (req,res)=>{
  //req.body //配置 body-parser， 获取post传值 
  console.log(req.body);
  const body = req.body;
  res.send({...body,file:req.file})
})

appRouter.post('/doEdit',(req,res)=>{
  //req.body //配置 body-parser， 获取post传值 
  console.log(req.body);
  res.send("doEdit 修改导航")
})

module.exports = appRouter;