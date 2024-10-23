// routes/downloads.js
const express = require('express')
const { recordDownload, fetchDownloads } = require('../controllers/download')

const router = express.Router()

// Endpoint to record a download
router.post('/record', recordDownload)

// Endpoint to fetch download statistics
router.get('/', fetchDownloads)

module.exports = router
