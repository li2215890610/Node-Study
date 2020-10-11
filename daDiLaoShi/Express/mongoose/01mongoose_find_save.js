const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/eggcms',{
  useNewUrlParser:true,
  useUnifiedTopology: true
})

//操作user 表 （集合） 
//定义一个 Schema Schema里面的对象值和数据库表里面的字段需要一一对应
//这样好处可以帮数据库进行验证 
var UserSchema = mongoose.Schema({
  //定义数据库表中的类型
  name: String,
  age: Number,
  status: Number
})

// 定义数据库模型 操作数据库 

//这是坑
// https://blog.csdn.net/qq_41745216/article/details/101080309


// mongoose.model(参数1:模型名称(首字母大写)、并且要和数据库表（集合）名称对应,参数2:Schema)
//下面代码意思为 与User表建立连接
// const Users  = mongoose.model('User',UserSchema) // 默认会操作users表, 因为会在第一个参数User后面加一个s 变为 Users

//如果写第三个参数，默认操作第三个参数定义的表（集合）名称
const User  = mongoose.model('User',UserSchema,'user')// 默认会操作第三个参数配置的表

// 查询数据
/*
Users.find({},(err,doc)=>{
  if (err) {
    console.log(err);
    return
  }

  console.log(doc,'doc_______');
})
*/

//增加数据
/*
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
*/
