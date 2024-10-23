const express = require('express');
const router = express.Router();
const {
  createPlaylist,
  getAllPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist,
} = require('../controllers/playlist'); 

// Define routes for the playlist
router.post('/', createPlaylist); 
router.get('/', getAllPlaylists); 
router.get('/:id', getPlaylistById); 
router.put('/:id', updatePlaylist); 
router.delete('/:id', deletePlaylist);

module.exports = router;
