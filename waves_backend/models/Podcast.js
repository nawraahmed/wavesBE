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
    genre_ids: [String], // Changed from genres to genre_ids
    language: { type: String }, // Added language attribute
    total_episodes: { type: Number, default: 0 }, // Added total_episodes attribute
    has_guest_interviews: { type: Boolean, default: false } // Added has_guest_interviews attribute
  },
  { timestamps: true }
)

module.exports = mongoose.model('Podcast', podcastSchema)
