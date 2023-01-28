const userRouter = require("./modules/user")

const routers = [userRouter]

const registerRouter = (app) => {
  routers.forEach(router => {
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}

module.exports = registerRouter