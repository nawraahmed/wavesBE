// const StatsModel = require('../models/Stats')

// exports.getUserStats = async (req, res) => {
//   const userId = req.user.id
//   try {
//     const stats = await StatsModel.findOne({ userId }).populate(
//       'listens.episodeId downloads.episodeId'
//     )
//     if (!stats) {
//       return res.status(404).json({ message: 'No stats found for this user' })
//     }
//     res.json(stats)
//   } catch (error) {
//     console.error('Error fetching user stats:', error)
//     res.status(500).send('Server Error')
//   }
// }

// exports.updateUserStats = async (req, res) => {
//   const { userId, episodeId, action } = req.body
//   try {
//     const update =
//       action === 'listen'
//         ? { $push: { listens: { episodeId, timestamp: new Date() } } }
//         : { $push: { downloads: { episodeId, timestamp: new Date() } } }

//     await StatsModel.findOneAndUpdate({ userId }, update, {
//       new: true,
//       upsert: true
//     })
//     res.status(200).json({ message: 'Stats updated successfully' })
//   } catch (error) {
//     console.error('Error updating user stats:', error)
//     res.status(500).send('Server Error')
//   }
// }
