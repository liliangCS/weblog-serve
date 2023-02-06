const UserModel = require("../model/user")
const { createToken } = require("../utils/token")
const { encrypt } = require("../utils/md5")

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
    const { user_id } = ctx.request.params
    const users = await UserModel.getUserById(user_id)
    ctx.body = { users: users, errorCode: 0 }
  }
  // 根据nickname查询用户
  static async getUserByNickname(ctx, next) {
    const { nickname } = ctx.request.query
    const users = await UserModel.getUserByNickname(nickname)
    ctx.body = { users: users, errorCode: 0 }
  }
  // 用户登录
  static async login(ctx, next) {
    // 1、用户名和密码是否为空
    const { username, password } = ctx.request.body
    if (!username || !password) {
      ctx.throw(400, "用户名或密码不能为空")
    }
    // 2、用户是否存在
    const users = await UserModel.getUserByUsername(username)
    if (users.length === 0) {
      ctx.throw(403, "用户不存在")
    }
    // 3、密码是否正确
    const user = users[0]
    if (encrypt(password) !== user.password) {
      ctx.throw(403, "密码错误")
    }
    // 4、颁发token
    const userInfo = { id: user.id, username: user.username }
    const token = createToken(userInfo)
    ctx.body = {
      errorCode: 0,
      msg: "登录成功",
      userInfo,
      token
    }
  }

  /**
   * --------------------增--------------------
   */
  // 注册用户
  static async addNewUser(ctx, next) {
    const { username, password } = ctx.request.body
    // 1、用户是否存在
    const users = await UserModel.getUserByUsername(username)
    if (users.length !== 0) {
      ctx.throw(403, "用户名已被注册")
    }
    // 2、用户不存在，注册用户
    try {
      await UserModel.addNewUser(username, encrypt(password))
      ctx.body = { msg: "注册成功", errorCode: 0 }
    } catch (error) {
      ctx.throw(500, error.message)
    }
  }

  /**
   * --------------------删--------------------
   */
  // 注销用户
  static async removeUser(ctx, next) {
    const { user_id } = ctx.request.params
    try {
      await UserModel.removeUser(user_id)
      ctx.body = { msg: "注销成功", errorCode: 0 }
    } catch (error) {
      ctx.throw(500, error.message)
    }
  }

  /**
   * --------------------改--------------------
   */
  // 修改密码
  static async updatePassword(ctx, next) {
    const { user_id } = ctx.request.params
    const { password } = ctx.request.body
    try {
      await UserModel.updatePassword(user_id, password)
      ctx.body = { msg: "修改成功", errorCode: 0 }
    } catch (error) {
      ctx.throw(500, error.message)
    }
  }
  // 修改用户信息
  static async updateUserInfo(ctx, next) {
    const { user_id } = ctx.request.params
    const { nickname, description, email, link_github, link_avatar } = ctx.request.body
    try {
      await UserModel.updateUserInfo(
        user_id,
        nickname,
        description,
        email,
        link_github,
        link_avatar
      )
      ctx.body = { msg: "修改成功", errorCode: 0 }
    } catch (error) {
      ctx.throw(500, error.message)
    }
  }
}

module.exports = UserController
