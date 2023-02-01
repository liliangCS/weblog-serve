const jwt = require("jsonwebtoken")
const secret = "2001.01.23"

/**
 * 创建token
 * @param {any} data 需要加密的数据
 * @param {number} exp 设置token的有效时间,以秒为单位
 */
const createToken = (data, exp = 6040800) => {
  const token = jwt.sign({ data }, secret, { expiresIn: exp })
  return token
}

/**
 * 解析token
 * @param {string} token
 * @returns
 */
const parseToken = (token) => {
  const info = jwt.verify(token, secret)
  return info
}

module.exports = {
  createToken,
  parseToken
}
