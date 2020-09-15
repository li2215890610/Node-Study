var fs = require("fs");

exports.getMime = (extName)=>{
  switch (extName) {
    case '.css':
    
      return 'css'
    case '.js':
    
      return 'javascript' 
    case '.json':
    
      return 'json' 
      
    default:
      return 'html'
  }
}


exports.getFileMimeAsync = async (extname)=>{

  return new Promise((resolve,reject)=>{
    fs.readFile("./data/mime.json",(err,data)=>{
      if (err) {
        console.log(err);
        reject(err)
        return
      }
      const extStr = JSON.parse(data.toString())[extname]
      console.log(extStr);
      resolve(extStr)
    })
  })
}

exports.getFileMimeSync = (extname)=>{
  const data = fs.readFileSync("./data/mime.json")
  return JSON.parse(data.toString())[extname]
}