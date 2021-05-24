var http = require('http');
const POST = "POST"

http.createServer(function (request, response) {

  if (request.method === POST) {
    console.log(request);

    var postData = ""
    request.on("data", chunk =>{
      postData += chunk.toString();
    })

    request.on("end", chunk =>{
      response.end("你好")
    })
  }
}).listen(10086);

console.log('Server running at http://127.0.0.1:10086/');