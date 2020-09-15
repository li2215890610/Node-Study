//wwwroot文件夹下面有images、css、js 以及index.html,找出wwwroot目录下面的所有的目录，然后放在数组中

var fs = require("fs");

/***错误的写法 */
/**
var path = './wwwroot';
var list = [];
fs.readdir(path,(err, data)=>{
  if (err) {
    console.log(errr);
    return
  }
  data.map((dir)=>{
    fs.stat(`${path}/${dir}`,function (err,data) {
      if (err) {
        console.log(err);
        return
      }

      if (data.isDirectory()) {
        list.push(dir)
      }
    })

  console.log(list)
  })
})
console.log(list)
 */

 