const Sequelize = require("sequelize");
const seq = require('./seq');

//创建 User 模型

const User = seq.define('user',{
  // id 会自动创建，并设置为主键、自增
  userName: {
    type: Sequelize.STRING, // 数据类型为 字符串
    allowNull: false,// 不允许为 null
  },
  password: {
    type: Sequelize.STRING, // 数据类型为 字符串
    allowNull: false,// 不允许为 null
  },
  nickName: {
    type: Sequelize.STRING, // 数据类型为 字符串
  },
})

const Blog = seq.define('blog',{
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

//外键关联
Blog.belongsTo(User, {
  //创建外键，Blog.userId -- 关联 User.id
  foreignKey: 'userId'
})
User.hasMany(Blog,{
  foreignKey:'userId'
})

module.exports = {
  User,
  Blog
}