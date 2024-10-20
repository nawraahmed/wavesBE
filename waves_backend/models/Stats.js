// models/statsModel.js
const mongoose = require('mongoose')

const statsSchema = new mongoose.Schema({
  podcastId: {
    type: String,
    required: true
  },
  listens: {
    type: Number,
    default: 0
  },
  downloads: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Stats', statsSchema)
