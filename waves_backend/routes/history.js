const express = require('express')
const router = express.Router()
const { saveHistory, getHistory } = require('../controllers/history')
const middleware = require('../middleware/index')

// POST /api/history/track - Save or update the history
router.post(
  '/track',
  middleware.stripToken,
  middleware.verifyToken,
  saveHistory
)

// GET /api/history/:userId - Fetch user's history
router.get(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  getHistory
)

module.exports = router
