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
  console.log(fs);
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

        console.log(data,'______data____');
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