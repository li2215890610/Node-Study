var multer  = require('multer');
const path = require("path");

let tools = {
  multer(){
    var storage = multer.diskStorage({
      //配置上传图片保存的目录
      destination: function (req, file, cb) {
        cb(null, 'static/uploads/') 
      },
      //修改上传后的文件名
      filename: function (_, file, cb) {
        // 1.获取上传文件后缀名
        let extname  = path.extname(file.originalname)
        cb(null, `${Date.now()}.${extname}`)
      }
    })
    
    const upload = multer({ storage: storage })

    return upload
  }
}

module.exports = tools;