const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
  episode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Episode',
    required: true
  },
  lastPlayedAt: { type: Date, default: Date.now }
})

const History = mongoose.model('History', historySchema)
module.exports = History
