const axios = require('axios')
const Podcast = require('../models/Podcast')
const User = require('../models/User')

// Controller to add a podcast
const addPodcast = async (req, res) => {
  try {
    const userId = req.user.id

    // Check if the podcast already exists
    const existingPodcast = await Podcast.findOne({
      externalId: req.body.externalId
    })

    if (existingPodcast) {
      return res.status(409).send({ error: 'Podcast already exists.' }) // 409 Conflict
    }

    const mappedPodcast = {
      externalId: req.body.externalId,
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.body.thumbnail,
      genre_ids: req.body.genre_ids,
      user: userId
    }

    console.log('Mapped podcast data:', mappedPodcast) // Log mapped podcast data
    const newPodcast = new Podcast(mappedPodcast)
    const savedPodcast = await newPodcast.save()

    await User.findByIdAndUpdate(
      userId,
      { $push: { addedPodcasts: savedPodcast._id } }, // Use savedPodcast._id
      { new: true }
    )

    res.status(201).send(savedPodcast)
  } catch (error) {
    console.error('Error adding podcast:', error)
    // Check for MongoDB duplicate key error
    if (error.code === 11000) {
      // MongoDB duplicate key error
      return res.status(409).send({ error: 'Podcast already exists.' })
    }
    res.status(500).send({ error: 'Failed to add podcast' })
  }
}

// Controller to search podcasts
const searchPodcasts = async (req, res) => {
  const query = req.query.q
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' })
  }

  try {
    const response = await axios.get(
      `https://listen-api.listennotes.com/api/v2/search`,
      {
        params: { q: query },
        headers: {
          'X-ListenAPI-Key': process.env.VITE_API_KEY
        }
      }
    )

    res.json(response.data)
  } catch (error) {
    console.error('Error fetching podcasts:', error.message)
    res.status(500).json({ error: 'Failed to fetch search results' })
  }
}

module.exports = { addPodcast, searchPodcasts }
