var http = require("http");
var tools = require("./module/tools")
http.createServer(function (req,res) {
  res.writeHead(200,{ "Content-Type":"text/html;charset=utf-8"})
  const url = tools.formatApi('sdsd')
  res.end(url)
}).listen(10085)

console.log('Server running at http://127.0.0.1:10085/');


