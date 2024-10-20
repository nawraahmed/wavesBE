// Import model
const Podcast = require('../models/Podcast')

// Controller to add a podcast
const addPodcast = async (req, res) => {
  try {
    // Get the user ID from the authenticated request
    const userId = req.user.id // Assuming you have a middleware that adds the user ID to req.user

    // Create a new podcast object, including the user ID
    const newPodcast = new Podcast({
      ...req.body, // Spread the request body
      user: userId // Add the user ID
    })

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
