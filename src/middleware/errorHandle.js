const errorHandle = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log("全局错误处理中间件:", error.message)
    ctx.response.status = error.statusCode || error.status || 500
    ctx.response.body = {
      msg: error.message,
      errorCode: 1
    }
  }
}

module.exports = errorHandle
