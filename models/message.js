const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
  content: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},{timestamps: true})

module.exports = mongoose.model('Message', MessageSchema)