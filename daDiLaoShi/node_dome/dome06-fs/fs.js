var paths = require("path");
const FILE = 'FILE';
const DIRECTORY = 'DIRECTORY';

exports.FILE = FILE;
exports.DIRECTORY = DIRECTORY;

exports.mkdir = ({ fs, path }) => {
  fs.mkdir(path, (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log("success")
  })
}

exports.readdir = ({ fs, cb, path, searchPath }) => {
  // console.log(fs);
  //打印所有文件 组成数组, 挨个删除有upload字段的所有
  fs.readdir(path, (_, files) => {
    let dirs = [];
    (function iterator(i) {

      if (i === files.length) {

        let fileList = [];

        dirs.map(dir => {
          if (dir.value.search(searchPath) !== -1) {
            fileList.push(dir)
          }
        });

        cb(fileList)

        return
      }

      fs.stat(paths.join('./', files[i]), (_, data) => {

        console.log(data, '______data____');
        if (data.isFile()) {
          dirs.push({
            key: FILE,
            value: files[i]
          });
        }

        if (data.isDirectory()) {
          dirs.push({
            key: DIRECTORY,
            value: files[i]
          });
        }

        iterator(i + 1);
      });

    })(0);

  });
}


function fsStat({ fsObj, fs}) {
  return new Promise((resolve)=>{
    fs.stat(paths.join('./', fsObj), (_, data) => {

      if (data.isFile()) {
        resolve({
          key: FILE,
          value: fsObj
        })
      }

      if (data.isDirectory()) {
        resolve({
          key: DIRECTORY,
          value: fsObj
        })
      }

    });
  })
}

exports.readdirPromise = ({ fs, path, searchPath }) => {

  return new Promise((resolve) => {
    //打印所有文件 组成数组, 为了挨个删除包含有upload的所有文件或者目录
    fs.readdir(path, (_, files) => {
      resolve(files)
    })
  }).then((files)=>{
    //区分是目录 还是文件返回数组
    return new Promise((resolve)=>{

      Promise.all(files.map((fsObj)=>{

        return fsStat({ fsObj, fs})
      })).then((dirs)=>{

        resolve(dirs)
      })
    })

  }).then((dirs)=>{

    return new Promise((resolve)=>{
      let list = [];

      dirs.map(dir => {
        if (dir.value.search(searchPath) !== -1) {
          list.push(dir)
        }
      });

      resolve(list)
    })
  })
}


