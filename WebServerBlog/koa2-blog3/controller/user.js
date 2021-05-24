const { exec, escape } = require("../db/mysql")
const { getPassword} = require("../utils/crypto")

// const login = ({username, password}) => {
//   let sql = `select username,password from users where username='${username}' and password='${password}';`
//   return exec(sql).then((data)=>{
//     return data[0] || null
//   })
// }


const login = async ({ username, password}) => {

  //生成加密密码
  password = getPassword(password)

  username = escape(username);
  password = escape(password);

  const sql = `select username, realname from users where username=${username} and password=${password}`
  
  const data = await exec(sql);
  return data[0] || null
}

async function checkUsername({ username}) {

  let sql = `select username from users where username=${username}`;
  const data = await exec(sql);

  if (data && data[0]) {
    return `${data[0][`username`]} 账户已被注册`
  }

  return null
}

const createUser = async ({ username, password}) => {

  username = escape(username)

  const data = await checkUsername({ username})

  if (!data) {
    //生成加密密码
    password = getPassword(password)

    password = escape(password)

    let sql = `insert into users (username,password) values (${username},${password});`

    const insertData = await exec(sql);

    return Promise.resolve({ id: insertData.insertId})
  }

  return data
}

const checkUser = async ({ username, oldPassword}) => {

  let sql = `select username, password from users where username=${username} and password=${oldPassword};`;
  
  const row =  await exec(sql);
  return row && row[0] ? row[0] : null
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

  const row = await exec(sql);

  //删除成功
  if (row.affectedRows > 0) {
    return null
  }

  return {
    msg: "删除失败"
  }
}

module.exports = {
  login,
  createUser,
  updateUser
}