const mongoose = require('./db');

const NewsSchema = mongoose.Schema({
    //定义数据库表中的类型
    title: 'string',
    author: String,
    content: String,
    status: {
      type: Number,
      default: 1 // 默认数据
    }
});

const newsModel = mongoose.model("News",NewsSchema,"news");

module.exports = newsModel;