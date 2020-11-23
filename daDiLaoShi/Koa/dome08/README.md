#### 52 10【koa教程】 Koa2 Cookie的使用

##### 一、Cookie 简介
cookie 是存储于访问者的计算机中的变量。可以让我们用同一个浏览器访问同一个域 名的时候共享数据。

##### 二、Koa Cookie 的使用

###### 1、Koa 中设置 Cookie 的值
```
ctx.cookies.set(name, value, [options])
```

###### 2、Koa 中获取 Cookie 的值
```
ctx.cookies.get('name');
```

##### 三、Koa 中设置中文 Cookie

```
const buffer = new Buffer("张三").toString("base64")
ctx.cookies.set('userinfo',buffer,{
  maxAge: 1000 * 20, //多长时间后过期
})

const buffer = new Buffer(ctx.cookies.get("userinfo"),'base64').toString()
```
