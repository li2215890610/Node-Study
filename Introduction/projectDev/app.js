var express = require("express");
var app = express();

app.use(express.static("staticDev"), function (params) {
  
})

app.listen(10086,function () {
  console.log("静态目录已启动")
})