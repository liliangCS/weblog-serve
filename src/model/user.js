const connectPool = require("../database")

class UserModel {
  /**
   * --------------------查询--------------------
   */
  // 查询所有用户
  static async getAllUser() {
    const statement =
      "select id, username, nickname, description, email, link_github, link_avatar from user;"
    const [res] = await connectPool.execute(statement)
    return res
  }
  // 根据id查询用户
  static async getUserById(userId) {
    const statement =
      "select id, username, nickname, description, email, link_github, link_avatar from user where id = ?;"
    const [res] = await connectPool.execute(statement, [userId])
    return res
  }
  // 根据nickname查询用户
  static async getUserByNickname(nickname) {
    const statement =
      "select id, username, nickname, description, email, link_github, link_avatar from user where nickname = ?;"
    const [res] = await connectPool.execute(statement, [nickname])
    return res
  }

  /**
   * --------------------增--------------------
   */
  // 注册用户
  static async addNewUser(username, password) {
    const statement = "insert into user (username, password) value (?,?);"
    const [res] = await connectPool.execute(statement, [username, password])
    return res
  }

  /**
   * --------------------删--------------------
   */
  // 注销用户
  static async removeUser(userId) {
    const statement = "delete from user where id = ?;"
    const [res] = await connectPool.execute(statement, [userId])
    return res
  }

  /**
   * --------------------改--------------------
   */
  // 修改密码
  static async updatePassword(userId, password) {
    const statement = "update user set password = ? where id = ?;"
    const [res] = await connectPool.execute(statement, [password, userId])
    return res
  }
  // 修改用户信息
  static async updateUserInfo(userId, nickname, description, email, link_github, link_avatar) {
    const statement =
      "update user set nickname = ?, description = ?, email = ?, link_github = ?, link_avatar = ? where id = ?;"
    const [res] = await connectPool.execute(statement, [
      nickname,
      description,
      email,
      link_github,
      link_avatar,
      userId
    ])
    return res
  }
}

module.exports = UserModel
