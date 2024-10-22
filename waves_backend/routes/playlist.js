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
router.post('/', createPlaylist); // Create a new playlist
router.get('/', getAllPlaylists); // Get all playlists
router.get('/:id', getPlaylistById); // Get a playlist by ID
router.put('/:id', updatePlaylist); // Update a playlist
router.delete('/:id', deletePlaylist); // Delete a playlist

module.exports = router;
