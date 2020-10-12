var mongoose = require("./db");

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: Number,
    default: 1 // 默认数据
  }
});

const UserModel = mongoose.model("User",UserSchema,"user");

module.exports = UserModel;