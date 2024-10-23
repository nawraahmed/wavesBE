const History = require('../models/History')
const User = require('../models/User')

// Save history
const saveHistory = async (req, res) => {
  const {
    podcastId,
    episodeId,
    podcastTitle,
    episodeTitle,
    progress,
    totalLength,
    userId
  } = req.body

  try {
    // Check if there's already a history entry for the same user and episode
    let history = await History.findOne({ userId, episodeId })

    if (history) {
      // Update the progress if history exists
      history.progress = progress
    } else {
      // Create new history if not exists
      history = new History({
        podcastId,
        episodeId,
        podcastTitle,
        episodeTitle,
        progress,
        totalLength,
        userId
      })
    }

    await history.save()

    // Add the history to the user's history list if not already added
    const user = await User.findById(userId)
    if (!user.history.includes(history._id)) {
      user.history.push(history._id)
      await user.save()
    }

    res.status(200).json(history)
  } catch (err) {
    console.error('Error saving history:', err)
    res.status(500).json({ error: 'Server error' })
  }
}

// Fetch user's history
const getHistory = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('history')
    res.status(200).json(user.history)
  } catch (err) {
    console.error('Error fetching history:', err)
    res.status(500).json({ error: 'Server error' })
  }
}

module.exports = {
  saveHistory,
  getHistory
}
