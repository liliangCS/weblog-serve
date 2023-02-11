const path = require("path")
const multer = require("@koa/multer")
const { uid } = require("leaf-lib")

const storage = multer.diskStorage({
  destination: function (_, _, cb) {
    cb(null, path.resolve(__dirname, "../../public/upload"))
  },
  filename: function (_, file, cb) {
    const fields = file.originalname.split(".")
    const suffix = fields[fields.length - 1]
    cb(null, uid() + "." + suffix)
  }
})
//加载配置
const fileUpload = multer({ storage: storage })

module.exports = fileUpload
