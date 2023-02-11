const path = require("path")
const logger = require("koa-logger")
const static = require("koa-static")
const { koaBody } = require("koa-body")

// koa-body文件上传配置
// const uploadConfig = {
//   multipart: true, // 支持文件上传
//   encoding: "gzip",
//   formidable: {
//     uploadDir: path.join(__dirname, "../../public/upload"), // 设置文件上传目录
//     keepExtensions: true, // 保持文件的后缀
//     maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
//     onFileBegin: (name, file) => {
//       // 文件上传前的设置
//       // console.log(`name: ${name}`)
//       // console.log(file)
//     }
//   }
// }

// 打印日志、请求体解析、静态资源托管
const initApp = (app) => {
  app.use(logger())
  app.use(koaBody())
  app.use(static(path.resolve(__dirname, "../../public")))
}

module.exports = initApp
