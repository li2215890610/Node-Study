// 获取 Cookie 过期时间
const getCookieEndTime = ()=>{
  const d = new Date();
  d.setTime(d.getTime()+(24* 60 * 60 * 1000));
  return d.toGMTString()
}

module.exports = {
  getCookieEndTime
}