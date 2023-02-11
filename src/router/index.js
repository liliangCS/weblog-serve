const userRouter = require("./modules/user")
const blogRouter = require("./modules/blog")
const fileRouter = require("./modules/file")

const routers = [userRouter, blogRouter, fileRouter]

const registerRouter = (app) => {
  routers.forEach((router) => {
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}

module.exports = registerRouter
