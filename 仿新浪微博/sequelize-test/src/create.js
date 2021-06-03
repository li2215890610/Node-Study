// insert 语句

const { Blog, User} = require("./model");

!( async () => {

  const zhangsan = await User.create({
    userName:"zhangsan",
    password:"87654321",
    nickName:"wangwu"
  })
  console.log('zahngsan:',zhangsan.dataValues);

  await User.create({
    userName:"lisi",
    password:"87654321",
    nickName:"wangwu"
  })

} )()
