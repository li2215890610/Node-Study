const NewsModel = require("./model/news")

const news = new NewsModel({
  title:"   这是一条标题  1  ",
  author:"杨大侠",
  pic:"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
  content:"我是一个内容",
})

//这样也可以修改数据
news.content = "我是二次修改的content";

news.save((err)=>{
  if (err) {
    console.log(err);
    return
  }

  findUser((data)=>{
    console.log("save success ",data);
  })
})

const findUser = (cb)=>{
  NewsModel.find({},(err,doc)=>{
    if (err) {
      console.log(err);
      return 
    }
    cb(doc)
  })
}