var fs = require("fs");

exports.getFileMimeSync = (extname)=>{
  const data = fs.readFileSync("./data/mime.json")
  return JSON.parse(data.toString())[extname]
}