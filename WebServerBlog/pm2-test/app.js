var http = require('http');
http.createServer(function (req, res) {

  //模拟日子
  console.log("cur time",Date.now());

  //模拟错误
  console.error("假装出错",Date.now());

  //模拟一个错误
  if (req.url === '/err') {
    throw new Error()
  }

  res.setHeader("Content-type","application/json")

  res.end(JSON.stringify({
    code: 0,
    mes:"pm2 test server 13"
  }));

}).listen(10086);

console.log('Server running at http://127.0.0.1:10086/');