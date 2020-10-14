const mongoose = require('./db');

const UserSchema = mongoose.Schema({
    //定义数据库表中的类型
    name: {
      type: String,
      //普通索引
      index: true
    },
    sn: {
      type: Number,
      //唯一索引
      unique: true
    },
    age: Number,
    status: {
      type: Number,
      default: 1 // 默认数据
    },
});

//静态方法
UserSchema.statics.findBySn = function (sn,cb){
  // 通过find方法 获取sn数据, this. 获取当前 model
  this.find({ "sn":sn},function (err,docs) {
    cb(err,docs)
  })
}
//实例方法
UserSchema.methods.print = function (){
  
  console.log("实例方法");
  console.log(this.name);
}

const UserModel = mongoose.model("User",UserSchema,"user");

module.exports = UserModel;