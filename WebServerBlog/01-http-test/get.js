var http = require('http');
var querystring = require("querystring")

http.createServer(function (request, response) {
  console.log('request.method',request.method); //获取请求方法 
  console.log('request.url',request.url);
  const url = request.url;
  const qurey = querystring.parse(url.split('?')[1]);
  console.log(qurey);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(
    JSON.stringify(qurey)
  );

}).listen(10086);

console.log('Server running at http://127.0.0.1:10086/');