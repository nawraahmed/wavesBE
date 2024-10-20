const Episode = require('../models/Episode')
const History = require('../models/History')

// When a user starts listening to an episode
const listenToEpisode = async (req, res) => {
  const { episodeId } = req.body

  try {
    // Find or create the episode
    let episode = await Episode.findById(episodeId)

    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' })
    }

    // Increment the listens
    episode.listens += 1
    episode.lastPlayedAt = Date.now()

    await episode.save()

    // Save to the listening history
    const history = new History({ episode: episode._id })
    await history.save()

    res.status(200).json({ message: 'Episode listened', episode })
  } catch (error) {
    res.status(500).json({ message: 'Error playing episode' })
  }
}

module.exports = { listenToEpisode }
