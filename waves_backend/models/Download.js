// models/Download.js
const mongoose = require('mongoose')

const DownloadSchema = new mongoose.Schema({
  podcastId: {
    type: String,
    required: true
  },
  podcastTitle: {
    type: String,
    required: true
  },
  downloadCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Download = mongoose.model('Download', DownloadSchema)

module.exports = Download
