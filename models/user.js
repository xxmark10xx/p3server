const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  bio: String,
  password: String,
  online: Boolean,
  avatar: {type: String, default: `https://uploads-ssl.webflow.com/60f4af788dc31bdb2d5c8b29/62468ba5f726d384994823a6_img-user.png`},
  chatrooms: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom'
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Message'
  }]
},{timestamps: true})

module.exports = mongoose.model('User', UserSchema)