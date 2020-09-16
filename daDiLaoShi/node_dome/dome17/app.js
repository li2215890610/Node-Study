var http = require("http");
var app = require("./module/route");
var ejs = require("ejs");

http.createServer(app).listen(10086);

//设置静态资源目录
//在ejs文件里面就可以使用 static文件里面的资源
app.static("static");

app.get('/form', (_,res) => {
  ejs.renderFile("./views/form.ejs", {}, (_, data) => {
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
    })
    res.end(data)
  })
})

app.post('/doLogin',(req,res)=>{
  console.log(req.body.username);
  console.log(req.body.password);

  res.writeHead(200,{
    "Content-Type":"text/html;charset=utf-8"
  })

  res.end(`
  账号：${req.body.username}
  密码：${req.body.password}
  `)
})



console.log('server http run 10086');