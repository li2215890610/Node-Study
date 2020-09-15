
var fs = require("fs")
var errors = require("./error")
//判断是不是一个文件或者目录，
/**
 * 
 *  //1. fs.stat 检测是 文件还是目录
 * 
fs.stat('package.json',(err,data) => {
  errors.err(err)
  if (data.isFile()) {
    console.log('是文件')
  }
  if (data.isDirectory()) {
    console.log('是目录')
  }
})
 */

//创建文件
/**
 * 
 *  //2. fs. mkdir 创建目录

fs.mkdir("./css",(err)=>{
  errors.err(err)
  console.log("success")
})
 */



 /**
  * //3. fs.writeFile 创建写入文件
  * 
fs.writeFile('./html/index.html','你好 nodejs',(err)=>{
  errors.err(err)
  console.log("success")
})
  */
 


 /**
  *  //4. fs.appendFile 追加文件 在原有的文件上面增加
  * 
fs.appendFile('./css/base.css','body{color:red}',(err)=>{
  errors.err(err)
  console.log("success")
})

fs.appendFile('./css/base.css','h1{color:red}',(err)=>{
  errors.err(err)
  console.log("success")
})

  */



/***
 * //5. fs.readFile 读取文件
 * 
 fs.readFile('./html/index.html',(err,data) =>{
  errors.err(err);
  console.log(data);
  console.log(data.toString());// Buffer 转化字符串 
})
 */

 
 /**
  * //6. fs. readdir 读取目录
  * 
fs.readdir("./html",(err,data)=>{
  errors.err(err)
  console.log(data)
})
  */


/**
 * //7. fs.rename 
 * 有以下两种玩法
 * 重命名 
 * 移动文件
 * 
 
 //重命名
fs.rename("./css/aaa.css","./css/index.css",(err,data)=>{
  errors.err(err)
})
//移动文件
fs.rename("./css/index.css","./html/index.css",(err,data)=>{
  errors.err(err)
  console.log("移动文件成功")
})
 */

/**
 * // 8. fs.rmdir 删除目录
 * 
 */
fs.rmdir('./sss',(err)=>{
  errors.err(err);
})


 /**
 * 
 * 
   9. fs.unlink 删除文件
 */

fs.unlink('./sss/index.txt',(err)=>{
  errors.err(err);
})
