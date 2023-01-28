const Koa = require("koa")
const errorHandle = require("./middleware/errorHandle")
const initApp = require("./middleware/initApp")
const registerRouter = require("./router")

const app = new Koa()
// app初始化配置
initApp(app)

// 全局错误捕获
app.use(errorHandle)

// 注册路由
registerRouter(app)

app.listen(3000, () => {
  console.log("服务已启动：http:127.0.0.1:3000")
})
