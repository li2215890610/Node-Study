//GET 请求

var http = require("http");
var util = require("util");
var url = require("url");

var httpServer = http.createServer(function (request,response) {
  response.writeHead(200,{
    "Content-Type":"text/plain;charset=utf-8"
  })
  // response.end("启动了")
  // console.log(request)

  // var query = url.parse(request.url,true).query;

  // response.write(`
  //   姓名:${query.name}
  //   年龄:${query.age}
  // `)
  // response.end()
  //.end 方法，只能向页面发送字符串，所以发送对象就会报错
  // response.end(url.parse(request.url))
  response.end(util.inspect(url.parse(request.url)))
})

httpServer.listen(10086)

console.log("10086已启动")