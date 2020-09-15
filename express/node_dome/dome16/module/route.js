var qureyString = require("querystring");
var url = require("url");
var fs = require("fs");
var path = require("path");

//根据后缀命获取文件类型
const getFileMimeSync = (extname) => {
  const data = fs.readFileSync("./data/mime.json")
  return JSON.parse(data.toString())[extname]
}
//处理静态文件
const initStatic = ({ res, req, staticPath }) => {

  //1.获取地址
  let pathUrl = url.parse(req.url, true).pathname;

  // 2.读取文件 
  pathUrl = pathUrl === '/' ? '/index.html' : pathUrl;

  //获取文件后缀名
  let extname = path.extname(pathUrl);

  try {

    const data = fs.readFileSync(`./${staticPath}${pathUrl}`)

    const mime = getFileMimeSync(extname)

    if (data) {
      res.writeHead(200, {
        "Content-Type": `${mime};charset=utf-8`
      })
      res.end(data)
    }
  } catch (error) {

  }

}
const servers = () => {

  let G = {
    staticPath: "static",
    G_GET: {},
    G_POST: {}
  }

  const app = (req, res) => {
    // console.log('init app');
    //配置静态web服务
    initStatic({req,res,staticPath:G.staticPath})

    const URL = url.parse(req.url, true).pathname
    const METHOD = req.method.toLocaleUpperCase();

    if (!G[`G_${METHOD}`][URL]) {
      res.writeHead(404, {
        "Content-Type": "text/html;charset=utf-8"
      });
      res.end("页面不存在");
      return
    }

    if (METHOD === "GET") {
      console.log(G.G_GET);
      console.log(URL);
      G.G_GET[URL](req, res);
    } else {
      let postData = "";
      req.on('data', (data) => {
        postData += data
      })
      req.on('end', () => {
        req.body = qureyString.parse(postData);
        G.G_POST[URL](req, res);//
      })
    }
  }

  app.get = (str, cb) => {
    // 注册方法 
    // console.log(`${str} get __  注册成功`);
    G.G_GET[str] = cb;

    /**
  
      G['/login'] = (req,res)=>{
  
      }
    */
  }

  app.post = (str, cb) => {
    // 注册方法 
    // console.log(`${str} post __  注册成功`);
    G.G_POST[str] = cb;
  }

  //配置静态目录
  app.static = (staticPath) => {
    G.staticPath = staticPath;
  }

  return app
}


module.exports = servers()





