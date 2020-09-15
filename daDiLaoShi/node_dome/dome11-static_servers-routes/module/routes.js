var fs = require("fs");
var utils = require("./index");
var path = require("path");
var url = require("url");

exports.static = ({res,req,staticPath})=>{

  //1.获取地址
  console.log(req.url);
  let pathUrl = url.parse(req.url,true).pathname;

  // 2.读取文件 
  pathUrl = pathUrl === '/' ? '/index.html' : pathUrl;

  //获取文件后缀名
  let extname = path.extname(pathUrl);
  
  if (pathUrl !== 'favicon.ico') {
    console.log(`/${staticPath}${pathUrl}`);

    try {

      const data = fs.readFileSync(`./${staticPath}${pathUrl}`)

      const mime = utils.getFileMimeSync(extname)

      if (data) {
        res.writeHead(200,{
          "Content-Type":`${mime};charset=utf-8`
        })
        res.end(data) 
      }
    } catch (error) {
      
    }

  }
}