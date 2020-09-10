var http = require("http");

console.log(http);

var httpServer = http.createServer(function (_,response) {
  //http头部信息
  //状态码
  //内容类型 text/plain （ps：纯文本），text/html

  //未设置utf-8 中文乱码
  // response.writeHead(200,{
  //   'Content-Type': "text/plain"
  // })
  response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}) 

  //向客户端返回数据
  response.end("<h1>第一个服务</h1>")
});

httpServer.listen(10086);

console.log(10086,'已经创建');


//每一次修改 http服务的文件都要重新启动
//访问地址就是 http://localhost:端口号