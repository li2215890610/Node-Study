const xss = require("xss");
const { exec,escape } = require("../db/mysql")


const getList = ({ author,keyword}) =>{
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
  return exec(sql)
}



const getDetail = ({ id}) =>{
  id = escape(id)
  let sql = `select * from blogs where id=${id}`
  return exec(sql).then((resolve)=>{
    // resolve 查询出来的是数组 所有需要取出来
    return resolve[0]
  })
}

const createBlog = ({
  title,
  content,
  author,
}) =>{
  
  title = xss(escape(title));
  content = xss(escape(content));
  author = xss(escape(author));  

  const sql = `insert into blogs (title,content,createtime,author) values (${title},${content},${Date.now()},${author});`

  return exec(sql).then((data)=>{
    return {
      id: data.insertId
    }
  })

}

const updateBlog = ({
  id,   
  title,
  content
}) => {

  title = escape(title);
  content = escape(content);
  id = escape(id);


  const sql = `update blogs set title=${title},content=${content} where id=${id}`

  return exec(sql).then((result)=>{
    //如果 affectedRows 大于0  就是更新成功
    if (result.affectedRows > 0) {
      return true
    }

    return false
  })
}

const delBlog = ({id,author})=>{
  id = escape(id);
  author = escape(author);

  let sql = `delete from blogs where id=${id} and author=${author}`

  return exec(sql).then((result)=>{
    //如果 affectedRows 大于0  就是删除成功
    if (result.affectedRows > 0) {
      return true
    }

    return false
    
  })
}

module.exports = {
  getList,
  getDetail,
  createBlog,
  delBlog,
  updateBlog,
}