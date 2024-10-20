// controllers/statsController.js
const Stats = require('../models/Stats')
const axios = require('axios')

// Controller function to get podcast stats from MongoDB
const getPodcastStats = async (req, res) => {
  const { podcastId } = req.params
  try {
    const stats = await Stats.findOne({ podcastId })
    if (!stats) {
      return res.status(404).json({ message: 'Podcast stats not found' })
    }
    res.status(200).json(stats)
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching podcast stats', error: err.message })
  }
}

// Controller function to get audience data from ListenNotes API
const getAudienceData = async (req, res) => {
  const { podcastId } = req.params
  try {
    const response = await axios.get(
      `https://listen-api.listennotes.com/api/v2/podcasts/${podcastId}/audience`,
      {
        headers: {
          'X-ListenAPI-Key': process.env.LISTENNOTES_API_KEY // Use your ListenNotes API key from .env
        }
      }
    )
    res.status(200).json(response.data)
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error fetching audience data from ListenNotes',
        error: error.message
      })
  }
}

module.exports = {
  getPodcastStats,
  getAudienceData
}
