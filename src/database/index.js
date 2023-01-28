const mysql = require("mysql2")
const { db_config } = require("./config")

const connectPool = mysql.createPool(db_config)

module.exports = connectPool.promise()
