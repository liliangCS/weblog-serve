const Router = require("@koa/router")
const UserController = require("../../controller/user")

const router = Router({ prefix: "/user" })

/**
 * --------------------查询--------------------
 */
// 查询所有用户
router.get("/all", UserController.getAllUser)
// 根据id查询用户(params)
router.get("/:userId", UserController.getUserById)
// 根据昵称查询用户(query)
router.get("/", UserController.getUserByNickname)

/**
 * --------------------增--------------------
 */
// 注册用户
router.post("/add", UserController.addNewUser)

/**
 * --------------------删--------------------
 */
// 注销用户
router.delete("/:userId", UserController.removeUser)

/**
 * --------------------改--------------------
 */
// 修改密码
router.put("/:userId", UserController.updatePassword)
// 修改用户信息
router.patch("/:userId", UserController.updateUserInfo)

module.exports = router
