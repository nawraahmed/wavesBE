const mongoose = require('mongoose')
const Schema = mongoose.Schema

const podcastSchema = new Schema(
  {
    externalId: {
      type: String,
      unique: true
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    thumbnail: {
      type: String
    },
    genre_ids: [Number],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to User model
      required: true
    } // Store the ID of the user who added the podcast
  },
  { timestamps: true }
)

module.exports = mongoose.model('Podcast', podcastSchema)
