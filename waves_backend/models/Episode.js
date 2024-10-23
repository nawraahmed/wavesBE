const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  audioUrl: { type: String, required: true },
  duration: { type: Number },
  releaseDate: { type: Date },
  podcast: { type: mongoose.Schema.Types.ObjectId, ref: 'Podcast' },
  thumbnail: { type: String, required: true },
  listens: { type: Number, default: 0 }, // Number of times this episode was played
  lastPlayedAt: { type: Date }
})

const Episode = mongoose.model('Episode', episodeSchema)
module.exports = Episode
