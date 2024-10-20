const express = require('express')
const router = express.Router()
const { addPodcast } = require('../controllers/podcast')
const middleware = require('../middleware/index')

router.post(
  '/addpodcast',
  middleware.stripToken,
  middleware.verifyToken,
  addPodcast
)

module.exports = router
