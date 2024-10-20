const axios = require('axios')
const Podcast = require('../models/Podcast')

// Controller to add a podcast
const addPodcast = async (req, res) => {
  try {
    // Get the user ID from the authenticated request
    const userId = req.user.id // Assuming you have a middleware that adds the user ID to req.user

    // Create a new podcast object, including the user ID
    const mappedPodcast = {
      externalId: req.body.externalId, // Ensure you use the correct property from the request
      title: req.body.title, // Adjust these according to the request body
      description: req.body.description,
      thumbnail: req.body.thumbnail,
      genre_ids: req.body.genre_ids,
      user: userId // Add the user ID
    }

    const newPodcast = new Podcast(mappedPodcast)

    // Save the podcast to the database
    const savedPodcast = await newPodcast.save()

    // Send back the saved podcast
    res.status(201).send(savedPodcast)
  } catch (error) {
    console.error('Error adding podcast:', error)
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
