const mongoose = require('./db');

const FocusSchema = mongoose.Schema({
    //定义数据库表中的类型
    title: {
      type: String,
      trim: true,//可以对  name 前后去除左右空格
    },
    pic: String,
    redirect: {
      type: String,
      //增加数据的时候给 redirect 修改数据
      set(params) {
        //params 可以获取  redirect 的值， 返回的数据就是redirect保存在数据库中的数据

        /**
            www.baidu.com        ===> http://www.baidu.com
            http://www.baidu.com ===> http://www.baidu.com
         */
        if (!params) return ""

        if (params.indexOf("http://") !== 0 && params.indexOf("https://") !== 0) {
          return `http://${params}`
        }

        return params
      }
    },
    status: {
      type: Number,
      default: 1 // 默认数据
    }
});

const focusModel = mongoose.model("Focus",FocusSchema,"focus");

module.exports = focusModel;