const mongoose = require('mongoose')
const Schema = mongoose.Schema

const podcastSchema = new Schema(
  {
    externalId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String
    },
    genres: [String]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Podcast', podcastSchema)
