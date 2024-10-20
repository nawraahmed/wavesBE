const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema(
  {
    name: { type: String, required: true }, // Name of the playlist
    thumbnail: { type: String }, // Thumbnail URL for the playlist
    visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'public'
    }, // Visibility of the playlist
    description: { type: String }, // Description of the playlist
    episode_count: { type: Number, default: 0 }, // Total number of episodes in the playlist
    podcast_count: { type: Number, default: 0 } // Total number of podcasts in the playlist
  },
  { timestamps: true }
)

const Playlist = mongoose.model('Playlist', playlistSchema)
module.exports = Playlist
