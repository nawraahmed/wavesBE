const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Podcast' }],
  playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }]
})

const User = mongoose.model('User', userSchema)
module.exports = User
