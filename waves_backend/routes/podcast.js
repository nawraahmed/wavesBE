const express = require('express')
const router = express.Router()
const { addPodcast, searchPodcasts } = require('../controllers/podcast')
const middleware = require('../middleware/index')

router.post(
  '/addpodcast',
  middleware.stripToken,
  middleware.verifyToken,
  addPodcast
)

router.get('/search', searchPodcasts)

module.exports = router
