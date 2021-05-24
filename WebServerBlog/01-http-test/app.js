var http = require('http');
var querystring = require("querystring");

http.createServer(function (request, response) {

  const method = request.method;
  const url = request.url;
  const path = url.split('?')[0];
  const qurey = querystring.parse(url.split('?')[1])
  
  //设置返回格式为json
  response.setHeader('Content-Type','application/json');
  //返回数据
  const resData = {
    method,
    url,
    path,
    qurey
  }

  response.end('Hello World');

}).listen(10086);

console.log('Server running at http://127.0.0.1:10086/');