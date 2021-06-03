const { Sequelize} = require("sequelize");

const seq = new Sequelize('koa2_weibo_db2','root','87654321',{
  host:"127.0.0.1",
  dialect: 'mysql'
})

module.exports = seq;
