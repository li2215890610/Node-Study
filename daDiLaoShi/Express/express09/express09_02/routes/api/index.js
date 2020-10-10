const express = require("express");
const appRouter = express.Router();

appRouter.get('/',(req,res)=>{
  //req.qurey //获取get传值
  console.log(req.query);
  // res.render("form")
  res.send("api")
})

module.exports = appRouter;