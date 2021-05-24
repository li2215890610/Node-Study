const { exec, escape } = require("../db/mysql")
const { getPassword} = require("../utils/crypto")

// const login = ({username, password}) => {
//   let sql = `select username,password from users where username='${username}' and password='${password}';`
//   return exec(sql).then((data)=>{
//     return data[0] || null
//   })
// }


const login = ({ username, password}) => {

  //生成加密密码
  password = getPassword(password)

  username = escape(username);
  password = escape(password);

  const sql = `select username, realname from users where username=${username} and password=${password}`
  return exec(sql).then((data)=>{
    return data[0] || null
  })
}

async function checkUsername({ username}) {

  let sql = `select username from users where username=${username}`
  return exec(sql).then((data)=>{
    if (data && data[0]) {
      return `${data[0][`username`]} 账户已被注册`
    }

    return null
  })
}

const createUser = ({ username, password}) => {

  username = escape(username)

  return checkUsername({ username}).then((data)=>{

    if (!data) {
      //生成加密密码
      password = getPassword(password)

      password = escape(password)

      let sql = `insert into users (username,password) values (${username},${password});`

      return exec(sql).then((data)=>{
        return {
          id:data.insertId
        }
      })
    }

    return data
  })
}


const checkUser = async ({ username, oldPassword}) => {

  let sql = `select username, password from users where username=${username} and password=${oldPassword};`;

  return exec(sql).then((row)=>{
    return row && row[0] ? row[0] : null
  })
}


const updateUser = async ({ username, oldPassword, newPassword}) => {
  username = escape(username)
  oldPassword = escape(getPassword(oldPassword))
  newPassword = escape(getPassword(newPassword))

  const checkUsernames = await checkUsername({ username})

  if (!checkUsernames) {
    return Promise.resolve({
      msg: '账户不存在'
    })
  }

  const checkUserInfo = await checkUser({ username, oldPassword})

  if (!checkUserInfo) {
    return Promise.resolve({
      msg: '旧密码不正确'
    })
  }

  const sql = `update users set password=${newPassword} where username=${username} and password=${oldPassword}`

  return exec(sql).then((row)=>{
    //删除成功
    if (row.affectedRows > 0) {
      return null
    }
    return {
      msg: "删除失败"
    }
  })
}

module.exports = {
  login,
  // loginCheck,
  createUser,
  updateUser
}