//引入模块化操作
const UserModel = require("./model/user");
const NewsModel = require("./model/news");

const findUser = (cb)=>{
  UserModel.find({},(err,doc)=>{
    if (err) {
      console.log(err);
      return 
    }
    cb(doc)
  })
}

const user = new UserModel({
  name:"2222",
  age:20
})

user.save((err)=>{
  if (err) {
    console.log(err);
    return 
  }

  findUser((data)=>{
    console.log(data,"______data");
  })

})

UserModel.updateOne({"_id":"5f83c59ec0616d3c0101216f"},{
  "name":"3333",
  "age":100
},(err)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log("update success");
})

UserModel.deleteOne({"_id":"5f83c59ec0616d3c0101216f"},(err)=>{
  if (err) {
    console.log(err);
    return
  }
  console.log("delete success");
})

NewsModel.find({},(err,doc)=>{
  if (err) {
    console.log(err);
    return 
  }

  console.log("find",doc,"success");
})