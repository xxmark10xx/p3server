const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
  content: String
},{timestamps: true})

module.exports = mongoose.model('Message', MessageSchema)