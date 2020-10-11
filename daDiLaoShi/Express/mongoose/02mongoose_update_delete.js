const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/eggcms',{
  useNewUrlParser:true,
  useUnifiedTopology: true
})

//操作news 表 （集合） 
//定义一个 Schema Schema里面的对象值和数据库表里面的字段需要一一对应
//这样好处可以帮数据库进行验证 
var NewsSchema = mongoose.Schema({
  //定义数据库表中的类型
  title: 'string',
  author: String,
  content: String,
  status: Number
})

//如果写第三个参数，默认操作第三个参数定义的表（集合）名称
const News  = mongoose.model('News',NewsSchema,'news')// 默认会操作第三个参数配置的表

//通过实例化Model 创建
var news = new News({
  title: '中国梦2',
  author: '杨大侠',
  content: '我是新闻的内容',
  status: 1
})

/*
news.save((err)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log("save success");
})
*/

/*
//更新数据
//第一个参数 查找的条件 
//第二个参数 修改的内容
News.updateOne({"title":"中国梦2"},{"title":"中国梦200"},(err)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log("update success");
})
*/

//删除数据
/*
//参数代表删除 title 为 '中国梦200' 的字段
News.deleteOne({"title":"中国梦200"},(err)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log("update success");
})
*/