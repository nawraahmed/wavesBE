const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
  externalId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  thumbnail: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Favorite = mongoose.model('Favorite', favoriteSchema)
module.exports = Favorite
