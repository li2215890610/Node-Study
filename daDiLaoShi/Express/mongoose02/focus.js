const focusModel = require("./model/focus");

const focus = new focusModel({
  title:"   这是一条标题  1  ",
  pic:"www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png1111",
  redirect:"www.baidu.com",
  status: 2,
})

focus.save((err)=>{
  if (err) {
    console.log(err);
    return
  }

  findFocus((data)=>{
    console.log("save success ",data);
  })
})

const findFocus = (cb)=>{
  focusModel.find({},(err,doc)=>{
    if (err) {
      console.log(err);
      return 
    }
    cb(doc)
  })
}