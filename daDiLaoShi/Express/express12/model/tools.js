const multer  = require('multer');
const path = require('path');
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');

let tools = {
  multer(){
    var storage = multer.diskStorage({
      //配置上传图片保存的目录
      destination: async (req, file, cb)=> {
        //1.获取当前日期 2020-1010
        let day = sd.format(new Date(), 'YYYY_MM_DD');
        //2.按照日期生成图片存储目录
        // let dir = path.join("static/uploads",day); //两种方式
        let dir = `static/uploads/${day}`;
        //创建文件夹 
        await mkdirp(dir)

        cb(null, dir ) 
      },
      //修改上传后的文件名
      filename: function (_, file, cb) {
        // 1.获取上传文件后缀名
        let extname  = path.extname(file.originalname)
        cb(null, `${Date.now()}${extname}`)
      }
    })
    
    const upload = multer({ storage: storage })

    return upload
  }
}

module.exports = tools;