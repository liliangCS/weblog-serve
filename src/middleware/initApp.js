const path = require("path")
const logger = require("koa-logger")
const static = require("koa-static")
const { koaBody } = require("koa-body")

// 打印日志、请求体解析、静态资源托管
const initApp = (app) => {
  app.use(logger())
  app.use(koaBody())
  app.use(static(path.resolve(__dirname, "../../public")))
}

module.exports = initApp
