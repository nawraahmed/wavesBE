// routes/statsRoutes.js
const express = require('express')
const { getPodcastStats, getAudienceData } = require('../controllers/stats')
const router = express.Router()

// Route to get podcast stats from MongoDB
router.get('/stats/:podcastId', getPodcastStats)

// Route to get audience data from ListenNotes
router.get('/audience/:podcastId', getAudienceData)

module.exports = router
