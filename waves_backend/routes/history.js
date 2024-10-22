// routes/history.js
const express = require('express')
const router = express.Router()
const History = require('../models/History')
const User = require('../models/User')
const { saveHistory, getHistory } = require('../controllers/history')
const middleware = require('../middleware/index')

// POST /api/history - Save or update the history
router.post(
  '/track',
  middleware.stripToken,
  middleware.verifyToken,
  saveHistory
)
router.get(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  getHistory
)

module.exports = router
