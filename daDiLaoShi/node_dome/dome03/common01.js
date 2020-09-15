var http = require('http');


function formatApi(api) {
  return `http://www.baidu.com/${api}`
}

http.createServer(function (request, response) {
  response.writeHead(200,{ "Content-Type": 'text/html;charset=utf-8' })
  const api = formatApi('sssssss')
  response.write(api)
  response.end('Hello World 你好');
}).listen(10085);

console.log('Server running at http://127.0.0.1:10085/');
