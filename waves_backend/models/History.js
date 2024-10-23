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
    episodeId: {
      type: String,
      required: true
    },
    podcastTitle: {
      type: String
    },
    episodeTitle: {
      type: String
    },
    progress: {
      type: Number,
      default: 0
    },
    totalLength: {
      type: Number,
      required: true
    },
    isFinished: {
      type: Boolean,
      default: false // Default is not finished
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('History', historySchema)
