const Router = require("@koa/router")
const router = new Router({ prefix: "/blog" })
const BlogController = require("../../controller/blog")

/**
 * --------------------查询--------------------
 */
// 查询所有博客
router.get("/all", BlogController.getAllBlog)

/**
 * --------------------增--------------------
 */
// 创建一篇博客
router.post("/add", BlogController.addBlog)

/**
 * --------------------删--------------------
 */
// 删除一篇博客
router.delete("/:blog_id", BlogController.removeBlog)

/**
 * --------------------改--------------------
 */
// 更新一篇博客
router.patch("/:blog_id", BlogController.updateBlog)

module.exports = router
