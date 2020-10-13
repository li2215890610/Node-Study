const UserModel = require("./model/user")

const user = new UserModel({
  name: "张三11111",
  age: 20
})

//好像 get 也没有作用
//set 修改之后就是改变存在数据库的内容
//get 就没有改变
console.log(user.name, user.age);



user.save((err) => {
  if (err) {
    console.log(err);
    return
  }

  findUser((data) => {
    console.log("save success ", data);
  })
})

const findUser = (cb) => {
  UserModel.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      return
    }
    cb(doc)
  })
}