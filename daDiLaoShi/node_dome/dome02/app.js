//引入http模块
var http = require('http');

/**
 * request  接收客户端发送的信息 
 * response 处理相应客户端信息
 */
http.createServer(function (request, response) {
  //设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
  //给页面输出一句话并且结束响应
  response.end('Hello World');
  //10085 表示端口
}).listen(10085);

console.log('Server running at http://127.0.0.1:10085/');