const Router = require("@koa/router")
const FileController = require("../../controller/file")
const fileUpload = require("../../middleware/fileUpload")
const router = new Router({ prefix: "/file" })

/**
 * --------------------增--------------------
 */
// 单文件上传
router.post("/upload-single", fileUpload.single("file"), FileController.uploadSingleFile)

// 多文件上传
router.post("/upload-multiple", fileUpload.array("files", 12), FileController.uploadMultipleFile)

module.exports = router
