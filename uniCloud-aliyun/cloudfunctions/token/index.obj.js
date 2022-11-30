// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const jwt = require('jsonwebtoken')
const miyao = 'qwert'
module.exports = {
  token(username) {
    let token = 'Bearer ' + jwt.sign({
      username
    }, miyao)
    return token
  },
  tokens(token1) {
    if (!token1) {
      return {
        code: 404,
        msg: '未登录'
      }
    }
    let token = token1.split(" ")[1]
    let auth = jwt.verify(
      token, miyao)
    let userid = auth.username;
    return userid
  }
}
