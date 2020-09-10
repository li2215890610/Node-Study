var http = require('http');
var url = require("url");

http.createServer(function (request, response) {

  // request.url 获取访问地址
  const query = url.parse(request.url,true).query
  console.log(query)

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World11');
}).listen(10085);

console.log('Server running at http://127.0.0.1:10085/');