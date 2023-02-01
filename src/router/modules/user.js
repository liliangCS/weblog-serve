const Router = require("@koa/router")
const UserController = require("../../controller/user")
const { verifyToken, verifyAdminAuth } = require("../../middleware/verify")

const router = Router({ prefix: "/user" })

/**
 * --------------------查询--------------------
 */
// 查询所有用户(需要管理员权限)
router.get("/all", verifyToken, verifyAdminAuth, UserController.getAllUser)
// 根据id查询用户(params)(需要管理员权限)
router.get("/:userId", verifyToken, verifyAdminAuth, UserController.getUserById)
// 根据昵称查询用户(query)(需要管理员权限)
router.get("/", verifyToken, verifyAdminAuth, UserController.getUserByNickname)
// 用户登录
router.post("/login", UserController.login)

/**
 * --------------------增--------------------
 */
// 注册用户(需要管理员权限)
router.post("/add", verifyToken, verifyAdminAuth, UserController.addNewUser)

/**
 * --------------------删--------------------
 */
// 注销用户(需要管理员权限)
router.delete("/:userId", verifyToken, verifyAdminAuth, UserController.removeUser)

/**
 * --------------------改--------------------
 */
// 修改密码
router.put("/:userId", UserController.updatePassword)
// 修改用户信息
router.patch("/:userId", UserController.updateUserInfo)

module.exports = router
