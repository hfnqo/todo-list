const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema ({
  name: {
    type: String,   // 資料型別是字串
    required: true  // 這個是必填欄位
  },
  done: {
    type: Boolean
  }
})

model.exports = mongoose.model('Todo', todoSchema)