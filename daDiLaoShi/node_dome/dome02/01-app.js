/**
 * http 创建web服务
 */
var http = require("http");

http.createServer(function (req,res) {
  //获取url
  console.log(req.url)
  //状态码 200
  //文件类型 html
  //字符集utf-8
  res.writeHead(200,{ "Content-Type": 'text/html;charset=utf-8' })
  //给页面输出一句话并且结束响应
  res.write('Hello World,你好'); //结束响应
  res.write('<h1>Hello World,你好</h1>'); //结束响应

  res.end()
}).listen(10085,function () {
  console.log(10085,'已开启');
})

