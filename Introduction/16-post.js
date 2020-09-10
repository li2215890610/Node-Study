//POST 请求
var http = require("http");
var qureyString = require("querystring")

const formHtml = `
<form method="POST">
  <div>
    网站名：<input name="name"/>
  </div>
  <div>
    年龄：<input name="age"/>
  </div>
  <input type="submit" />
</form>
`
var httpServer = http.createServer(function (request,response) {

  var body = "";
  request.on("data",function (data) {
    body += data;
  })

  request.on("end",function (params) {
    //把body 字符串重新转成对象
    body = qureyString.parse(body)
    console.log(body)
    response.writeHead(200,{
      "Content-Type":"text/html;charset=utf-8"
    })

    if (!body.name || !body.age) {
      response.write(formHtml)
    }else{
      response.write(`
        姓名:${body.name}
        年龄:${body.age}
      `)
    }
    response.end()
  })
})

httpServer.listen(10086);

console.log("已运行")