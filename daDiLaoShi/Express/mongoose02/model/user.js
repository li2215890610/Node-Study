const mongoose = require('./db');

const UserSchema = mongoose.Schema({
    //定义数据库表中的类型
    name: {
      type: String,
      get(params){ //不建议使用 暂时没有发现有啥用处
        return `a001${params}`
      }
    },
    age: Number,
    status: {
      type: Number,
      default: 1 // 默认数据
    }
});

const UserModel = mongoose.model("User",UserSchema,"user");

module.exports = UserModel;