var url = require("url")
/***
app.get('/', function (req, res) {
  res.send('hello world')
})
 */

let G = { };

const app = (req,res)=>{
  console.log('init app');
  const URL = url.parse(req.url,true).pathname
  if (URL) {
    G[URL](req,res);//
  }else{
    res.writeHead(404,{
      "Content-Type":"text/html;charset=utf-8"
    });
    res.end("页面不存在");
  }
}

app.get = (str,cb)=>{
  // 注册方法 
  console.log(`${str} __  注册成功`);
  G[str] = cb;

  /**

    G['/login'] = (req,res)=>{

    }
  */
}

module.exports = app;