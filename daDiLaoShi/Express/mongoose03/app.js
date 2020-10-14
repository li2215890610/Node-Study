const UserModel = require("./model/user")

const user = new UserModel({
  name: "王五",
  age: 20,
  sn:"123456782"
})

UserModel.findBySn("123456782",(err,doc)=>{
  if (err) {
    console.log(err);
    return
  }

  console.log("自定义方法", doc);
})

user.print() // 打印实例方法

// user.save((err) => {
//   if (err) {
//     console.log(err);
//     return
//   }

//   findUser((data) => {
//     console.log("save success ", data);
//   })
// })

const findUser = (cb) => {
  UserModel.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      return
    }
    cb(doc)
  })
}