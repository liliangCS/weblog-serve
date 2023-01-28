const errorHandle = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = {
      msg: error.message,
      errorCode: 1
    }
  }
}

module.exports = errorHandle
