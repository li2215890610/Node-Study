var fs = require("fs");

const path = './';

/**
 * async 生命方法成为异步
 * await 等待异步的方法
 */

 /**
  * 
  function test(){
    return "你好Nodejs"
  }
  console.log(test())
  */

/**
// 不推荐这样写
 async function test(){
   return "你好Nodejs"
 }


//  console.log(await test()) //错误    必须用在 async方法里面
// console.log(test())

async function main(){
  const data = await test();
  console.log(data)
}

main()
 */


/**
async function test(){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("你好")
    }, 2000);
  })
}


async function main(){
  const data = await test();
  console.log(data)
}

main()
 */


async function isDir({ path}){
  return new Promise((resolve, reject)=>{
    fs.stat(path, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }
      //目录
      if (data.isDirectory()) {
        resolve(true)
      }else{
        resolve(false)
      }
    })
  })
}

function main() {
  fs.readdir(path, async (_, files) => {  //注意 用await 上层函数必须用到 async
    let dirs = [];
      for (let i = 0; i < files.length; i++) {
        if (await isDir({ path: files[i]})) {
          dirs.push(files[i])
        }
      }

      console.log(dirs)
  });
}


main()
