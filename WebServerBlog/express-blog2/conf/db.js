const env = process.env.NODE_ENV; // 获取环境参数

let MYSQL_CONF = {};
let REDIS_CONF = {};

const evnConfig = {
  dev: "dev",
  production: "production"
}

if (env === evnConfig.dev) {
  MYSQL_CONF = {
    host: '127.0.0.1',
    user: "root",
    password: `87654321`,
    port: 3306,
    database: "myblog"
  }

  REDIS_CONF = {
    port: 6379,
    host: 'localhost',
  }
}

if (env === evnConfig.production) {
  MYSQL_CONF = {
    host: '线上地址',
    user: "线上用户名",
    password: `线上密码`,
    port: 3306,// 线上端口
    database: "线上数据库名称"
  }

  REDIS_CONF = {
    port: 6379,
    host: 'localhost',
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}

