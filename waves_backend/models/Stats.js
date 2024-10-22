// const mongoose = require('mongoose')

// const statsSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true
//     },
//     listens: [
//       {
//         episodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode' },
//         timestamp: Date
//       }
//     ],
//     downloads: [
//       {
//         episodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode' },
//         timestamp: Date
//       }
//     ]
//   },
//   { timestamps: true }
// )

// const StatsModel = mongoose.model('Stats', statsSchema)
// module.exports = StatsModel
