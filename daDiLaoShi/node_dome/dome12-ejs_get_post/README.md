#### 封装静态资源WEB服务、路由、EJS模版引擎、GET、POST


##### 封装静态资源WEB服务


##### 路由
根据不同的路径请求的 URL，处理不同的业务逻辑。

我的理解就是url

##### EJS模版引擎
EJS 是后台模板，可以把我们数据库和文件读取的数据显示到 Html 页面上面。它是一个第三方模块，需要通过 npm 安装,
https://www.npmjs.com/package/ejs

```
npm install ejs –save 
cnpm install ejs --save
```

Nodejs 中使用:
```
ejs.renderFile(filename, data, options, function(err, str){ 

});
```
##### GET、POST


超文本传输协议(HTTP)的设计目的是保证客户端机器与服务器之间的通信。
在客户端和服务器之间进行请求-响应时，两种最常被用到的方法是:GET 和 POST。
GET - 从指定的资源请求数据。(一般用于获取数据)
POST - 向指定的资源提交要被处理的数据。(一般用于提交数据)


获取 GET 传值:

```
  const urlinfo=url.parse(req.url,true).qurey;
```

获取 POST 传值:
```
var qureyString = require("querystring");

var postData = '';
// 数据块接收中
req.on('data', (postDataChunk)=> {
  postData += postDataChunk; 
});

// 数据接收完毕，执行回调函数 
req.on('end', function () {
  const data = qureyString.parse(postData);

  console.log(querystring.parse(postData));
  res.end(`${data.username},${data.password}`)

});

```