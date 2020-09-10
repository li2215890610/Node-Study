var fs = require("fs");
var fsf = require("./fs");

const path = './upload';
const FILE = 'FILE';
const DIRECTORY = 'DIRECTORY';

// 判断服务器上面有没有upload目录，如果没有upload就创建这个目录，如果有不做任何操作 （图片上传）
//封装文件
const statFile = ({ fileList }) => {

  fs.stat(path, (err, data) => {
    if (err) {
      console.log(err)
      fsf.mkdir({ fs, path })
      return
    }

    if (fileList.length) {
      fileList.map(item => {
        console.log(item)
        if (item.key === FILE) {
          //删文件
          fs.unlink(item.value, (err) => {
            console.log(err);
          })
        }
        if (item.key === DIRECTORY) {
          //删目录
          fs.rmdir(item.value,(err)=>{
            console.log(err);
          }) 
        }
      })
    }

    //不存在目录
    if (!data.isDirectory()) {
      fsf.mkdir({ fs, path })
    }
  })
}

//打印所有文件 组成数组, 挨个删除有upload字段的所有
fsf.readdir({ fs, path:"./",searchPath:"upload", cb:(fileList)=>{
  statFile({ fileList})
}})