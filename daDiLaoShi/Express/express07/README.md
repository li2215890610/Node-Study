### P32 05、【Express教程】express-session的基本使用 常见参数配置使用

#### Session 介绍

**session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上。** 

Cookie数据存放在客户的浏览器上，Session 数据放在服务器上。Session相比Cookie要
更安全- -些。由于Session保存到服务器上，所以当访问量增多的时候，会比较占用服务器
的性能。单个cookie保存的数据大小不能超过4K，很多浏览器都限制“一个站点最多保存20
个cookie。Session 没有这方面的限制。Session 是基于Cookie进行工作的。

#### Session 的工作流程
当客户端访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成一
个类似于key, value的键值对，然后将key (cookie)返回到浏览器(客户)端，浏览器下次
再访问时，携带key (cookie)，找到对应的session(value)。

#### express-session 的使用
[express-session](https://www.npmjs.com/package/express-session)

```
npm install express-session --save
```


