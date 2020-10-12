const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/eggcms',{
  useNewUrlParser:true,
  useUnifiedTopology: true
},(err)=>{
  if (err) {
    console.log(err);
    return 
  }
  console.log("mongodb server run ");
})

//定义数据库集合映射
//定义Schema 必须要和数据库字段保持一致
const UserSchema = mongoose.Schema({
    //定义数据库表中的类型
    name: String,
    age: Number,
    //默认参数
    status: {
      type: Number,
      default: 1 // 默认数据
    }
});

//定义model操作数据库
const UserModel = mongoose.model("User",UserSchema,"user");

//查找数据
/*
UserModel.find({},(err,doc)=>{
  if (err) {
    console.log(err);
    return 
  }

  console.log(doc);
})
*/

//      默认参数 
// 增加数据的时候，如果不传入数据会使用默认配置的数据

const user = new UserModel({
  name:"王五",
  age: 202,
  //缺少 status 但是 Schema定义了默认参数，save的时候就会默认添加到数据库里面
})

user.save((err)=>{
  
  if (err) {
    console.log(err);
    return 
  }

  console.log("save user success");
})