//创建服务

var express = require("express");

var app = express();

//根目录
app.get('/',function (_,res) {
  res.send("你好，express")
})

app.listen(10086,function () {
  console.log('node express 已启动')
}) 
