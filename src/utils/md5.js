const md5 = require("md5")

/**
 * 加盐处理
 * @param {any} data
 * @returns
 */
const encrypt = (data) => {
  return md5(data)
}

module.exports = {
  encrypt
}
