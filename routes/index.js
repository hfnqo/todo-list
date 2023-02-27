 // 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入 home, todo 模組
const home = require('./modules/home')
const todos = require('./modules/todos')

// 將網址結構符合 /, /todos 字串的 requset 導向 home, todos 模組
router.use('/', home)
router.use('/todos', todos)

// 匯出路由器
module.exports = router