const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  online: Boolean,
  avatar: String,
  chatrooms: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom'
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Message'
  }]
})

module.exports = mongoose.model('User', UserSchema)