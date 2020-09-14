var fs = require("fs");
var path = require("path");
var url = require("url");
var ejs = require("ejs");
var qureyString = require("querystring");

const getFileMimeSync = (extname)=>{
  const data = fs.readFileSync("./data/mime.json")
  return JSON.parse(data.toString())[extname]
}

const app = {
  static: ({ res, req, staticPath }) => {

    //1.获取地址
    console.log(req.url);
    let pathUrl = url.parse(req.url, true).pathname;

    // 2.读取文件 
    pathUrl = pathUrl === '/' ? '/index.html' : pathUrl;

    //获取文件后缀名
    let extname = path.extname(pathUrl);

    if (pathUrl !== 'favicon.ico') {
      console.log(`/${staticPath}${pathUrl}`);

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
  },
  login: ({ req, res }) => {
    const message = "数据库获取的数据";
    const list = [];
    for (let i = 0; i < 10; i++) {
      list.push({
        title: `新闻${i}`
      })
    }
    ejs.renderFile("./views/login.ejs", { message, list }, (err, data) => {
      res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
      })
      res.end(data)
    })

  },
  news: ({ req, res }) => {
    const query = url.parse(req.url, true).query;
    console.log(query.page);
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
    })
    res.end(`当前页码${query.page}`)
  },
  form: ({ req, res }) => {
    ejs.renderFile("./views/form.ejs", {}, (err, data) => {
      res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
      })
      res.end(data)
    })
  },
  doLogin: ({ req, res }) => {
    //获取post传值
    let postData = ""
    req.on("data", (data) => {
      postData += data;
    })

    req.on("end", () => {

      const data = qureyString.parse(postData);
      console.log(data.username);
      console.log(data.password);

      res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
      })
      res.end(`${data.username},${data.password}`)
    })
  },
  admin: ({ res }) => {
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
    })
    res.end('执行处理管理后台逻辑')
  },
  error: ({ res }) => {
    res.end('error')
  },
}


// exports.login = app.login;

module.exports = app;
