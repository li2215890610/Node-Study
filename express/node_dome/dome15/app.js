var http = require("http");
var app = require("./module/route")
var ejs = require("ejs");

http.createServer(app).listen(10086);

app.get('/login', (_,res) => {
  console.log('__app.servers.get(()=>{___');
  const message = "数据库获取的数据";
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      title:`新闻${i}`
    })
  }

  ejs.renderFile("./views/login.ejs", {
    message,
    list
  }, (_, data) => {
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
    })
    res.end(data)
  })
})

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


console.log(app);