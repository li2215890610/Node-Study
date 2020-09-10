const obj = {
  get:()=>{
    console.log("从服务器获取")
  },
  set:()=>{
    console.log("从服务器提交数据")
  }
}

module.exports = obj;