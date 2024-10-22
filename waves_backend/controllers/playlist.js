const Playlist = require('../models/Playlist'); 

// Create a new playlist
const createPlaylist = async (req, res) => {
  try {
    const { name, thumbnail, visibility, description } = req.body; 
    const newPlaylist = await Playlist.create({ 
      name, 
      thumbnail, 
      visibility, 
      description 
    }); 
    res.status(201).json(newPlaylist); 
  } catch (error) {
    res.status(500).json({ message: 'Error creating playlist', error }); 
  }
};

// Get all playlists
const getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find(); 
    res.status(200).json(playlists); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlists', error });
  }
};

// Get a playlist by ID
const getPlaylistById = async (req, res) => {
  try {
    const { id } = req.params; 
    const playlist = await Playlist.findById(id); 
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' }); 
    }
    res.status(200).json(playlist); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlist', error });
  }
};

// Update a playlist
const updatePlaylist = async (req, res) => {
  try {
    const { id } = req.params; 
    const updatedPlaylist = await Playlist.findByIdAndUpdate(id, req.body, { new: true }); 
    if (!updatedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(updatedPlaylist); 
  } catch (error) {
    res.status(500).json({ message: 'Error updating playlist', error });
  }
};

// Delete a playlist
const deletePlaylist = async (req, res) => {
  try {
    const { id } = req.params; 
    const deletedPlaylist = await Playlist.findByIdAndDelete(id); 
    if (!deletedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(204).json(); 
  } catch (error) {
    res.status(500).json({ message: 'Error deleting playlist', error });
  }
};

module.exports = {
  createPlaylist,
  getAllPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist,
};
