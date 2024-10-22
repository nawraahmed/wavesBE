// models/History.js
const mongoose = require('mongoose')
const { Schema } = mongoose

const historySchema = new Schema(
  {
    podcastId: { type: String, required: true },
    episodeId: { type: String, required: true },
    podcastTitle: { type: String, required: true },
    episodeTitle: { type: String, required: true },
    progress: { type: Number, required: true },
    totalLength: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('History', historySchema)
