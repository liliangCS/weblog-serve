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
  static async getUserById(user_id) {
    const statement =
      "select id, username, nickname, description, email, link_github, link_avatar from user where id = ?;"
    const [res] = await connectPool.execute(statement, [user_id])
    return res
  }
  // 根据nickname查询用户
  static async getUserByNickname(nickname) {
    const statement =
      "select id, username, nickname, description, email, link_github, link_avatar from user where nickname = ?;"
    const [res] = await connectPool.execute(statement, [nickname])
    return res
  }
  // 根据username查询用户
  static async getUserByUsername(username) {
    const statement = "select id, username, password from user where username = ?;"
    const [res] = await connectPool.execute(statement, [username])
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
  static async removeUser(user_id) {
    const statement = "delete from user where id = ?;"
    const [res] = await connectPool.execute(statement, [user_id])
    return res
  }

  /**
   * --------------------改--------------------
   */
  // 修改密码
  static async updatePassword(user_id, password) {
    const statement = "update user set password = ? where id = ?;"
    const [res] = await connectPool.execute(statement, [password, user_id])
    return res
  }
  // 修改用户信息
  static async updateUserInfo(user_id, nickname, description, email, link_github, link_avatar) {
    const statement =
      "update user set nickname = ?, description = ?, email = ?, link_github = ?, link_avatar = ? where id = ?;"
    const [res] = await connectPool.execute(statement, [
      nickname,
      description,
      email,
      link_github,
      link_avatar,
      user_id
    ])
    return res
  }
}

module.exports = UserModel
