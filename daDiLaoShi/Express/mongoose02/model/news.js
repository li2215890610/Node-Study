const mongoose = require('./db');

const NewsSchema = mongoose.Schema({
    //定义数据库表中的类型
    title: {
      type: String,
      trim: true,//可以对  name 前后去除左右空格
    },
    author: String,
    pic: String,
    content: String,
    status: {
      type: Number,
      default: 1 // 默认数据
    }
});

const newsModel = mongoose.model("News",NewsSchema,"news");

module.exports = newsModel;