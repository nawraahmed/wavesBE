const mongoose = require('mongoose')

const podcastSchema = new mongoose.Schema({
  externalId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  thumbnail: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Podcast = mongoose.model('Podcast', podcastSchema)
module.exports = Podcast
