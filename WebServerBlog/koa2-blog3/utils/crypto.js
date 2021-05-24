const crypto = require("crypto");
/**
 * 加密 密码
 */

// 密钥
const SECRET_KEY = 'Y_D_X_S_Erver#';

// md5 加密
function md5(cot) {
  let md5 = crypto.createHash("md5");

  return md5.update(cot).digest("hex")
}

function getPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str)
}

module.exports = {
  getPassword
}
