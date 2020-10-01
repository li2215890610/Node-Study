### P31 04、【Express教程】 Express中间件 cookie的基本使用 多个二级域名共享cookie Cookie加密

#### cookie 简介
- [x] cookie是存储于访问者的计算机中的变量。可以让我们用同一个浏览器访问同一个域
名的时候共享数据。
- [x] HTTP 是无状态协议。简单地说，当你浏览了-一个页面，然后转到同一个网站的另一个页
面，服务器无法认识到这是同一个浏览器在访问同一个网站。每一次的访问， 都是没有任何
关系的。
- [x] Cookie 是一个简单到爆的想法:当访问一个页面的时候，服务器在下行HTTP报文中，
命令浏览器存储一个字符串;浏览器再访问同一个域的时候，将把这个字符串携带到上行
HTTP请求中。第- -次访问一个服务器，不可能携带cookie。必须是 服务器得到这次请求，
在下行响应报头中，携带cookie 信息，此后每一次浏览器往这个服务器发出的请求，都会
携带这个cookie.

#### cookie 使用

Express 中要使用Cookie的话，我们需要使用cookie-parser的模块来实现 
##### 安装cookie-parser
[cookie-parser](https://www.npmjs.com/package/cookie-parser)

```
npm install cookie-parser --save
```

--
网站的默认端口是 80