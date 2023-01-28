const UserModel = require("../model/user")

class UserController {
  /**
   * --------------------查询--------------------
   */
  // 查询所有用户
  static async getAllUser(ctx, next) {
    const users = await UserModel.getAllUser()
    ctx.body = { users: users, errorCode: 0 }
  }
  // 根据id查询用户
  static async getUserById(ctx, next) {
    const { userId } = ctx.request.params
    const users = await UserModel.getUserById(userId)
    ctx.body = { users: users, errorCode: 0 }
  }
  // 根据nickname查询用户
  static async getUserByNickname(ctx, next) {
    const { nickname } = ctx.request.query
    const users = await UserModel.getUserByNickname(nickname)
    ctx.body = { users: users, errorCode: 0 }
  }

  /**
   * --------------------增--------------------
   */
  // 注册用户
  static async addNewUser(ctx, next) {
    const { username, password } = ctx.request.body
    const res = await UserModel.addNewUser(username, password)
    if (res.affectedRows) {
      ctx.body = { msg: "注册成功", errorCode: 0 }
    } else {
      ctx.body = { msg: "注册失败", errorCode: 1 }
    }
  }

  /**
   * --------------------删--------------------
   */
  // 注销用户
  static async removeUser(ctx, next) {
    const { userId } = ctx.request.params
    const res = await UserModel.removeUser(userId)
    if (res.affectedRows) {
      ctx.body = { msg: "注销成功", errorCode: 0 }
    } else {
      ctx.body = { msg: "注销失败", errorCode: 1 }
    }
  }

  /**
   * --------------------改--------------------
   */
  // 修改密码
  static async updatePassword(ctx, next) {
    const { userId } = ctx.request.params
    const { password } = ctx.request.body
    const res = await UserModel.updatePassword(userId, password)
    if (res.affectedRows) {
      ctx.body = { msg: "修改成功", errorCode: 0 }
    } else {
      ctx.body = { msg: "修改失败", errorCode: 1 }
    }
  }
  // 修改用户信息
  static async updateUserInfo(ctx, next) {
    const { userId } = ctx.request.params
    const { nickname, description, email, link_github, link_avatar } = ctx.request.body
    const res = await UserModel.updateUserInfo(
      userId,
      nickname,
      description,
      email,
      link_github,
      link_avatar
    )
    if (res.affectedRows) {
      ctx.body = { msg: "修改成功", errorCode: 0 }
    } else {
      ctx.body = { msg: "修改失败", errorCode: 1 }
    }
  }
}

module.exports = UserController
