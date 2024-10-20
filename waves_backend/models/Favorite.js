const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true
  },
  podcastId: {
    // Store the API ID here
    type: String,
    required: true
  }
})

const Favorite = mongoose.model('Favorite', favoriteSchema)
module.exports = Favorite
