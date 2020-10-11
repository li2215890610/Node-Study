### P37 10、【Express+Mongoose】mongoose入门以及mongoose实现数据的增、删、改、查( 一 )

#### mongoose
[mongoose介绍](http://www.mongoosejs.net/)

**Mongoose** 是在**node.js**异步环境下对**mongodb**进行便捷操作的对象模型工具。**Mongoose**是**NodeJS**的驱动，不能作为其他语言的驱动。

Mongoose有两个特点
+   1、通过关系型数据库的思想来设计非关系型数据库
+   2、基于mongodb驱动，简化操作

直白一点说 mongoose 就是 Node操作mongodb的一个模块，底层是把 mongodb 这个模块再次封装，简洁的让我们使用

[mongoose npm地址](https://www.npmjs.com/package/mongoose)

1.安装
```
npm install mongoose --save
```
2.引入 mongoose 并连接数据库
```
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/eggcms');
//如果有账户密码需要采用下面的连接方式:
//eggadmin 账户 123456密码
mongoose.connect('mongodb://eggadmin:123456@127.0.0.1:27017/eggcms');
```
3.定义Schema

数据库中的Schema,为数据库对象的集合（数据库表中字段的集合）。schema是mongoose里会用到的一种数据模式，
可以理解为表结构的定义,每个schema会映射到mongodb中的一个collection（表），它不具备
操作数据库的能力

```
var UserSchema = mongoose.Schema({
  name: String,
  age:Number,
  status:Number
})
```
4.创建数据库模型

定义好了Schema,接下就是生成Model。model 是由schema生成的模型，可以对数据库的
操作。
**注意: mongoose.model 里面可以传入两个参数也可以传入三个参数**

mongoose.model(参数1:模型名称(首字母大写)、并且要和数据库表（集合）名称对应,参数2:Schema)

mongoose.model(参数1:模型名称(首字母大写)、并且要和数据库表（集合）名称对应,参数2:Schema,参数3:数据库集合名称)

如果传入2个参数的话: 这个模型会和模型名称相同的复数的数据库表建立连接,如通过下面
方法创建模型，那么这个模型将会操作User这个集合。
```
const dbName = 'User';
const Users  = mongoose.model(modeldbName,UserSchema)
```

如果传入3个参数的话: 模型默认操作第三个参数定义的表（集合）名称

```
const Users  = mongoose.model(modeldbName,UserSchema,'user')
```

5.操作数据库-查询数据
```
Users.find({},(err,doc)=>{
  if (err) {
    console.log(err);
    return
  }

  console.log(doc,'doc_______');
})
```

6.操作数据库-增加数据
```
// 实例化Model 通过User Molde 创建增加的数据
const u = new User({
  name:"李四111",
  age: 20,
  status: 3
})
// save 保存
u.save((err)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log("save success");
})
```

7.更新数据
```
//第一个参数 查找的条件
//第二个参数 修改的内容
User.updateOne({"name":"李四111"},{"name":"李四1112"},(err)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log("update success");
})
```

8.删除数据
```
//参数代表删除 name 为  '李四1112' 的字段
User.deleteOne({"name":"李四1112"},(err)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log("delete success");
})
```