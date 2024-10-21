// routes/statsRoutes.js
const express = require('express')
const { getUserStats, updateUserStats } = require('../controllers/stats')

const router = express.Router()

// Define the routes
router.get('/:userId', getUserStats)
router.post('/update', updateUserStats)

module.exports = router
