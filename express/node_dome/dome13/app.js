var http = require("http");
var url = require("url");
var routers = require("./module/routes");

http.createServer('/',function (req,res) {

  routers.static({req,res,staticPath:"static"})

  const pathUrl = url.parse(req.url,true).pathname.replace('/','')

  //获取请求类型
  console.log(req.method);

  try {
    //如果存在就加载这个路由
    routers[pathUrl]({req,res})
  } catch (error) {
    routers.error({res})
  }


  // switch (pathUrl) {
  //   case '/login':



  //     break;

  //   case '/reginster':
  //     res.writeHead(200,{
  //       "Content-Type":"text/html;charset=utf-8"
  //     })
  //     res.end('执行注册')
  //     break;

  //   case '/admin':
  //       res.writeHead(200,{
  //         "Content-Type":"text/html;charset=utf-8"
  //       })
  //       res.end('执行处理管理后台逻辑')
  //       break; 

  //   case '/news':
  //     const query = url.parse(req.url,true).query;
  //     console.log(query.page);
  //     res.writeHead(200,{
  //       "Content-Type":"text/html;charset=utf-8"
  //     })
  //     res.end(`当前页码${query.page}`)
  //   break;
    
  //   case '/form':
  //     ejs.renderFile("./views/form.ejs",{ },(err,data)=>{
  //       res.writeHead(200,{
  //         "Content-Type":"text/html;charset=utf-8"
  //       })
  //       res.end(data)
  //     })
  //   break;

  //   case '/doLogin':

  //   //获取post传值
  //   let postData = ""
  //   req.on("data",(data)=>{
  //     postData += data;
  //   })

  //   req.on("end",()=>{
      
  //     const data = qureyString.parse(postData);
  //     console.log(data.username);
  //     console.log(data.password);

  //     res.writeHead(200,{
  //       "Content-Type":"text/html;charset=utf-8"
  //     })
  //     res.end(`${data.username},${data.password}`)
  //   })
      
  //   break;

  //   default:
  //     res.writeHead(404,{
  //       "Content-Type":"text/html;charset=utf-8"
  //     })
  //     res.end("页面不存在")
  //     break;
  // }




}).listen(10086,function () {
  console.log("10086 已启动")
})