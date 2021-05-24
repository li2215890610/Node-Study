const xss = require("xss");
const { exec,escape } = require("../db/mysql")


const getList = async ({ author,keyword}) =>{
  // 如果 WHERE 条件后面不加  1=1 会报错
  let sql = `select * from blogs where 1=1 `
  if (author) {
    author = escape(author);
    sql += `and author=${author} `
  }

  if (keyword) {
    // keyword = escape(keyword)
    // LIKE运算符用于WHERE表达式中, 以搜索匹配字段中的指定内容
    sql += `and title like '%${keyword}%' `
  }

  // order by  __  desc 降序 54321
  // order by  __  asc  升序 12345
  sql += `order by createtime desc;`
  return await exec(sql)
}



const getDetail = async ({ id}) =>{
  id = escape(id)
  let sql = `select * from blogs where id=${id}`;

  const data = await exec(sql);
  // data 查询出来的是数组 所有需要取出来
  return data[0]
}

const createBlog = async ({
  title,
  content,
  author,
}) =>{
  
  title = xss(escape(title));
  content = xss(escape(content));
  author = xss(escape(author));  

  const sql = `insert into blogs (title,content,createtime,author) values (${title},${content},${Date.now()},${author});`;

  const data = await exec(sql);
  return {
    id: data.insertId
  }
}

const updateBlog = async ({
  id,   
  title,
  content
}) => {

  title = escape(title);
  content = escape(content);
  id = escape(id);


  const sql = `update blogs set title=${title},content=${content} where id=${id}`
  const updateData = await exec(sql);
  //如果 affectedRows 大于0  就是更新成功
  if (updateData.affectedRows > 0) {
    return true
  }

  return false

}

const delBlog = async ({id,author})=>{
  id = escape(id);
  author = escape(author);

  let sql = `delete from blogs where id=${id} and author=${author}`

  const delData = await exec(sql);

  //如果 affectedRows 大于0  就是删除成功
  if (delData.affectedRows > 0) {
    return true
  }

  return false
}

module.exports = {
  getList,
  getDetail,
  createBlog,
  delBlog,
  updateBlog,
}