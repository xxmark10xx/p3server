const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  online: Boolean,
  avatar: {type: String, default: `https://res.cloudinary.com/dtmyibw85/image/upload/v1648664128/defaultuser_rhnnd6.png`},
  chatrooms: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom'
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Message'
  }]
},{timestamps: true})

module.exports = mongoose.model('User', UserSchema)