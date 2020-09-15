var qureyString = require("querystring");
var url = require("url");

const servers = () => {

  let G = {
    G_GET:{},
    G_POST:{}
  }

  const app = (req,res) =>{
    console.log('init app');
    const URL = url.parse(req.url,true).pathname
    const METHOD = req.method.toLocaleUpperCase();

    if (!G[`G_${METHOD}`][URL]) {
      res.writeHead(404,{
        "Content-Type":"text/html;charset=utf-8"
      });
      res.end("页面不存在");
    }

    if (METHOD === "GET" ) {
      G_GET[URL](req,res);
    }else{
      let postData = "";
      req.on('data',(data)=>{
        postData += data
      })
      req.on('end',()=>{
        req.body = qureyString.parse(postData);
        G_POST[URL](req,res);//
      })
    }
  }
  
  app.get = (str,cb)=>{
    // 注册方法 
    console.log(`${str} get __  注册成功`);
    G.G_GET[str] = cb;
  
    /**
  
      G['/login'] = (req,res)=>{
  
      }
    */
  }

  app.post = (str,cb)=>{
    // 注册方法 
    console.log(`${str} post __  注册成功`);
    G.G_POST[str] = cb;
  }

  return app
}


module.exports = servers()