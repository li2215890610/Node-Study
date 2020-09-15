var http = require("http");
var fs = require("fs");
var utils = require("./utlis/index");
var path = require("path");
var url = require("url");

http.createServer('/',function (req,res) {

  //1.获取地址
  console.log(req.url);
  let pathUrl = url.parse(req.url,true).pathname;

  // 2.读取文件 
  pathUrl = pathUrl === '/' ? '/index.html' : pathUrl;

  //获取文件后缀名
  let extname = path.extname(pathUrl);
  
  if (pathUrl !== 'favicon.ico') {
    console.log(`/static${pathUrl}`);
    fs.readFile(`./static${pathUrl}`,(err,data)=>{
      if (err) {
        console.log(err);
        res.writeHead(404,{
          "Content-Type":`text/html;charset=utf-8`
        })
        res.end("当前页面不存在")
      }
      //解决 css加载问题
      const mime = utils.getMime(extname);
      res.writeHead(200,{
        "Content-Type":`text/${mime};charset=utf-8`
      })
      res.end(data)
    })
  }

}).listen(10086,function () {
  console.log("10086 已启动")
})