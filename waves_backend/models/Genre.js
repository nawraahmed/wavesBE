const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema(
  {
    id: { type: String, required: true, unique: true }, // Unique identifier for the genre
    name: { type: String, required: true } // Name of the genre
  },
  { timestamps: true }
)

const Genre = mongoose.model('Genre', genreSchema)
module.exports = Genre
