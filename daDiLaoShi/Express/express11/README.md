### P35 08【Express教程】Express 结合multer上传文件、模块化封装

#### multer 模块介绍

Multer是一个node.js中间件，用于处理 **multipart/form-data** 类型的表单数据，它主要用
于上传文件。它是写在busboy 之上非常高效。

注意: Multer不会处理任何非 **multipart/form-data** 类型的表单数据。

[multer](https://www.npmjs.com/package/multer)

```
//form 表单里面 必须要加上 enctype="multipart/form-data"
<form action="/admin/nav/doAdd" method="post" enctype="multipart/form-data">
</form>




// 引入 multer
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

// upload.single('pic') 
// pic 接受的参数名必须和客户端传过来的一样 
appRouter.post('/doAdd', upload.single('pic'), (req,res)=>{
  //req.body //配置 body-parser， 获取post传值 
  console.log(req.body);
  const body = req.body;
  res.send({...body,file:req.file})
})

```