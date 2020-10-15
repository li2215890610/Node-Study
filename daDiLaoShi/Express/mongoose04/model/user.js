const mongoose = require('./db');

// mongoose数据校验:用户通过mongoose给mongodb数据库增加数据的时候，对数据的合法性进行的验证

// mongoose里面定义Schema:字段类型，修饰符、默认参数、数据校验都是为了数据库数据的一致性

// Schema, 为数据库对象的集合，每个schema会映射到mongodb中的一个collection（表）,定义Schema可以理解为表结构的定

const UserSchema = mongoose.Schema({
    //定义数据库表中的类型
    name: {
      type: String, // 指定类型
      trim: true, //修饰符
      required: true, //必传
    },
    sn: {
      type: Number,
      //唯一索引
      unique: true,
      set(params){
        return params
      },
      maxlength: 15,
      minlength: 5,
      //配置 正则表达式
      // match:/^sn(.*)/i
    },
    age: {
      type: Number,
      // max min 是用在Number类型中才能用
      max: 150,
      min: 0,
      default: 0,
    },
    status: {
      type: String,
      default: "success", // 默认数据
      // 注意 枚举是用在 String类型下面的
      enum:["success","error"],//status 的值必须是数组里面的其中一个
    },
    desc: {
      type: String,
      //自定义验证器，如果通过验证返回 true ,没有返回 false
      validate: function (desc) {
        return desc.length > 10
      }
    }
});

const UserModel = mongoose.model("User",UserSchema,"user");

module.exports = UserModel;