// controllers/downloadController.js
const Download = require('../models/Download')

// Controller to record a download
const recordDownload = async (req, res) => {
  const { podcastId, podcastTitle } = req.body

  try {
    let download = await Download.findOne({ podcastId })

    if (download) {
      // If it exists, increment the download count
      download.downloadCount += 1
    } else {
      // If it doesn't exist, create a new entry
      download = new Download({ podcastId, podcastTitle, downloadCount: 1 })
    }

    await download.save() // Save the updated or new download record
    res.status(200).json({ message: 'Download recorded', download })
  } catch (error) {
    console.error('Error recording download:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Controller to fetch download statistics
const fetchDownloads = async (req, res) => {
  try {
    const downloads = await Download.find().sort({ createdAt: -1 }) // Fetch all downloads, sorted by date
    res.status(200).json(downloads)
  } catch (error) {
    console.error('Error fetching download data:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = {
  recordDownload,
  fetchDownloads
}
