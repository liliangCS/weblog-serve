const { parseToken } = require("../utils/token")

// 验证令牌
const verifyToken = async (ctx, next) => {
  // 1、token是否存在
  const authHeader = ctx.request.header.authorization
  if (!authHeader) ctx.throw(401, "token不存在")
  // 2、token是否有效
  const token = authHeader.replace("Bearer ", "")
  try {
    var info = parseToken(token)
  } catch (error) {
    ctx.throw(401, "无效的token")
  }
  // 3、token是否过期
  if (Math.floor(Date.now() / 1000) >= info.exp) {
    ctx.throw(401, "token过期")
  }
  ctx.state.user = info.data
  await next()
}

// 验证管理员权限
const verifyAdminAuth = async (ctx, next) => {
  const userInfo = ctx.state.user
  if (userInfo.id !== 1) {
    ctx.throw(401, "此操作需要管理员权限")
  }
  await next()
}

module.exports = { verifyToken, verifyAdminAuth }
