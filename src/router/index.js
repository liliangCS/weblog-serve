const userRouter = require("./modules/user")
const blogRouter = require("./modules/blog")

const routers = [userRouter, blogRouter]

const registerRouter = (app) => {
  routers.forEach(router => {
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}

module.exports = registerRouter