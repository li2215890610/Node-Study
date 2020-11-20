#### P49 07【Koa教程】Koa2 post提交数据 koa-bodyparser中间件


##### 一、原生Nodejs获取post提交数据

```
exports.getPostData = function (ctx) {
    //原生node 获取post数据
    return new Promise(function (resolve, reject) {
        try {
            let str = '';
            ctx.req.on('data', function (chunk) {
                str += chunk;
            })

            ctx.req.on('end', function (chunk) {

                resolve(str)
            })

        } catch (err) {
            reject(err)
        }

    })

}
```

##### 二、Koa 中 koa-bodyparser

###### 1、安装 koa-bodyparser
```
npm install --save koa-bodyparser
```

###### 2、安装 引入配置中间件
```
//引入
const bodyParser = require("koa-bodyparser");

//配置
app.use(bodyParser())
```

###### 3、使用
```

```

