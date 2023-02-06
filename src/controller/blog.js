const BlogModel = require("../model/blog")

class BlogController {
  /**
   * --------------------查询--------------------
   */
  // 查询所有博客
  static async getAllBlog(ctx, next) {
    const [blogs] = await BlogModel.getAllBlog()
    ctx.body = { blogs, errorCode: 0 }
  }

  /**
   * --------------------增--------------------
   */
  // 创建一篇博客
  static async addBlog(ctx, next) {
    const { title, content, user_id, type_id, cover_image } = ctx.request.body
    try {
      await BlogModel.addBlog(title, content, user_id, type_id, cover_image)
      ctx.body = { msg: "创建博客成功", errorCode: 0 }
    } catch (error) {
      ctx.throw(500, error.message)
    }
  }

  /**
   * --------------------删--------------------
   */
  // 删除一篇博客
  static async removeBlog(ctx, next) {
    const { blog_id } = ctx.request.params
    try {
      await BlogModel.removeBlog(blog_id)
      ctx.body = { msg: "删除博客成功", errorCode: 0 }
    } catch (error) {
      ctx.throw(500, error.message)
    }
  }

  /**
   * --------------------改--------------------
   */
  // 更新一篇博客
  static async updateBlog(ctx, next) {
    const { blog_id } = ctx.request.params
    const { title, content, type_id, cover_image } = ctx.request.body
    console.log(blog_id, title, content, type_id, cover_image)
    try {
      await BlogModel.updateBlog(blog_id, title, content, type_id, cover_image)
      ctx.body = { msg: "更新博客成功", errorCode: 0 }
    } catch (error) {
      ctx.throw(500, error.message)
    }
  }
}

module.exports = BlogController
