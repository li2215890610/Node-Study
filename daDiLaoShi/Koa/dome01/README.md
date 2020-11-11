#### Koa 框架介绍以及 Koa2.x 环境搭建

[koa 官网](https://koa.bootcss.com/)
[koa Npm地址](https://www.npmjs.com/package/koa)
[koa 中文网](https://www.itying.com/koa/article-index-id-90.html)


##### 一、Koa 框架介绍

Node.js 是一个异步的操作，官方 API 支持的都是 callback 形式的异步编程模型，这会带来许多问题，例如：1、callback 嵌套问题 2、异步函数中，可能同步调用 callback 返回数据，带来不一致性。为了解决以上问题 Koa 出现了。

###### Koa -- 基于 Node.js 平台的下一代 web 开发框架

**koa** 是由 **Express** 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。 使用 koa 编写 web 应用，可以免除重复繁琐的回调函数嵌套， 并极大地提 升错误处理的效率。**koa** 不在内核方法中绑定任何中间件， 它仅仅提供了一个轻量优雅的 函数库，使得编写 Web 应用变得得心应手。开发思路和 **Express** 差不多，最大的特点就是 可以避免异步嵌套。


#### 二、Koa2.x 框架的安装使用

##### 1、安装 Node.js 8.x 以上的版本
开发 Koa2 之前，Node.js 是有要求的，它要求 Node.js 版本高于 V7.6。因为 node.js 7.6 版本 开始完全支持 async/await，所以才能完全你支持我们的 Koa2。

##### 2、安装 Koa：
安装 Koa 框架和我们以前安装其他模块是一样的。

```
npm install --save koa
```

```
//引入 Koa 
const koa = require('koa'); 
const app = new koa(); 

//配置中间件 （可以先当做路由） 
app.use( async (ctx)=>{ 
  ctx.body='hello koa2' 
})

//监听端口 
app.listen(3000);
```