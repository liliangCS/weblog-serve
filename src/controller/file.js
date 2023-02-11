class FileController {
  /**
   * --------------------增--------------------
   */
  // 上传单个文件
  static async uploadSingleFile(ctx, next) {
    const file = ctx.request.file
    const baseURL = "http://localhost:3000/"
    ctx.body = {
      errorCode: 0,
      file_link: baseURL + "upload/" + file.filename
    }
  }

  // 上传多个文件
  static async uploadMultipleFile(ctx, next) {
    const files = ctx.request.files
    const baseURL = "http://localhost:3000/"
    const file_links = files.map((file) => baseURL + "upload/" + file.filename)
    ctx.body = {
      errorCode: 0,
      file_links
    }
  }
}

module.exports = FileController
