const mongoose = require('mongoose')

const ChatroomSchema = mongoose.Schema({
  name: String,
  description: String,
  users: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Message'
  }]
})

module.exports = mongoose.model('Chatroom', UserSchema)