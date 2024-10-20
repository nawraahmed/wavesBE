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

module.exports = { addPodcast }
