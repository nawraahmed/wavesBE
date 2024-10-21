const Favorite = require('../models/Favorite')
const Podcast = require('../models/Podcast')
const mongoose = require('mongoose')

const addFavorite = async (req, res) => {
  try {
    const userId = req.user.id
    const { podcastId } = req.body

    console.log('Received podcastId:', podcastId, 'Type:', typeof podcastId) // Log for debugging

    // Check if the podcast is already in the user's favorites
    const existingFavorite = await Favorite.findOne({
      user: userId,
      podcastId: podcastId // Use the API ID directly
    })
    if (existingFavorite) {
      console.log('Podcast is already in favorites')
      return res.status(400).send({ error: 'Podcast is already in favorites' })
    }

    // Add the podcast to the user's favorites using the API ID
    const newFavorite = new Favorite({
      user: userId,
      podcastId: podcastId // Store the API ID
    })

    const savedFavorite = await newFavorite.save()
    console.log('Saved favorite:', savedFavorite)

    res.status(201).send(savedFavorite)
  } catch (error) {
    console.error('Error adding to favorites:', error.message)
    res
      .status(500)
      .send({ error: 'Failed to add to favorites', details: error.message })
  }
}

module.exports = { addFavorite }
