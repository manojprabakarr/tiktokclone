const mongoose = require('mongoose')

const datamodel=mongoose.Schema({
    url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  desc: String,
  shares: String,
})

module.exports=mongoose.model("vedios",datamodel)