const mongoose = require('mongoose')

const historySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    episode: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Episode',
      required: true
    },
    playedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

const History = mongoose.model('History', historySchema)
module.exports = History
