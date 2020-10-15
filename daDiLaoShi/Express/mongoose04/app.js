const UserModel = require("./model/user")

const user = new UserModel({
  age: 6,
  sn:"123456",
  name:"李四",
  status:"success",
  desc:"11111111121"
})


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