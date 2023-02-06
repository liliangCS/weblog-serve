const connectPool = require("../database")

class BlogModel {
  /**
   * --------------------查询--------------------
   */
  // 查询所有博客
  static async getAllBlog() {
    const statement =
      "select title, content, user_id, type_id, cover_image, create_time, update_time from blog;"
    const res = await connectPool.execute(statement)
    return res
  }

  /**
   * --------------------增--------------------
   */
  static async addBlog(title, content, user_id, type_id, cover_image) {
    const statement =
      "insert into blog (title, content, user_id, type_id, cover_image) VALUES (?, ?, ?, ?, ?);"
    const res = await connectPool.execute(statement, [
      title,
      content,
      user_id,
      type_id,
      cover_image
    ])
    return res
  }

  /**
   * --------------------删--------------------
   */
  // 删除一篇博客（根据id）
  static async removeBlog(blogId) {
    const statement = "delete from blog where id = ?;"
    const res = await connectPool.execute(statement, [blogId])
    return res
  }

  /**
   * --------------------改--------------------
   */
  // 更新一篇博客
  static async updateBlog(blogId, title, content, type_id, cover_image) {
    const statement =
      "update blog set title = ?, content = ?, type_id = ?, cover_image = ?  where id = ?;"
    const res = await connectPool.execute(statement, [title, content, type_id, cover_image, blogId])
    return res
  }
}

module.exports = BlogModel
