// models/History.js
const mongoose = require('mongoose')
const { Schema } = mongoose

const historySchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    podcastId: {
      type: String,
      required: true
    },
    progress: {
      type: Number,
      default: 0 // Default progress is 0
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('History', historySchema)
