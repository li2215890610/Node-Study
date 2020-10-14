### P40 13、【Express+Mongoose】Mongoose索引、Mongoose内置方法、扩展Mongoose Model的静态方法和实例方法（四）

#### 一、Mongoose索引
索引是对数据库表中一列或多列的值进行排序的一种结构， 可以让我们查询数据库变得更快。MongoDB 的索引几乎与传统的关系型数据库一模一样，这其中也包括一些基本的查询优化技巧。

```
var DeviceSchema = new mongoose.Schema({
  sn: {
    type: Number,
    //唯一索引
    unique: true
  },
  name: {
    type: String,
    //普通索引
    index: true
  }
});
```

#### 二、Mongoose内置方法
[文档地址](http://www.mongoosejs.net/docs/queries.html)

#### 三、扩展Mongoose Model的静态方法和实例方法（四）
说白了就是自定义方法查询

详细查看 model/user.js

在 **Schema** 里面扩展自定义方法
```
//静态方法
UserSchema.statics.findBySn = function (sn,cb){
  // 通过find方法 获取sn数据, this. 获取当前 model
  this.find({ "sn":sn},function (err,docs) {
    cb(err,docs)
  })
}
```