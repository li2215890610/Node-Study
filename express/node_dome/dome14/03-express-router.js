var http = require("http")
var app = require("./module/router");

// 注册web服务
http.createServer(app).listen(10086)

app.get('/',(_,res)=>{
  
  res.writeHead(200,{
    "Content-Type":"text/html;charset=utf-8"
  })
  res.end("首页")
})

app.get('/login',(_,res)=>{
  
  res.writeHead(200,{
    "Content-Type":"text/html;charset=utf-8"
  })
  res.end("login")
})

app.get('/news',(_,res)=>{
  
  res.writeHead(200,{
    "Content-Type":"text/html;charset=utf-8"
  })
  res.end("news")
})

app.get('/login',(_,res)=>{
  res.writeHead(200,{
    "Content-Type":"text/html;charset=utf-8"
  })
  res.end("login")
})