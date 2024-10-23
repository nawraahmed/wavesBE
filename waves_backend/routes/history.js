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

module.exports = router
