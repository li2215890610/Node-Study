var http = require("http");
var url = require("url");
var routers = require("./module/routes")

http.createServer('/',function (req,res) {

  routers.static({req,res,staticPath:"static"})

  const pathUrl = url.parse(req.url,true).pathname;

  // if (pathUrl === '/login') {
  //   res.writeHead(200,{
  //     "Content-Type":"text/html;charset=utf-8"
  //   })
  //   res.end('/end')
  // }

  switch (pathUrl) {
    case '/login':
      res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
      })
      res.end('执行登陆')
      break;

    case '/reginster':
      res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
      })
      res.end('执行注册')
      break;
    case '/admin':
        res.writeHead(200,{
          "Content-Type":"text/html;charset=utf-8"
        })
        res.end('执行处理管理后台逻辑')
        break;    
    default:
      res.writeHead(404,{
        "Content-Type":"text/html;charset=utf-8"
      })
      res.end("页面不存在")
      break;
  }




}).listen(10086,function () {
  console.log("10086 已启动")
})