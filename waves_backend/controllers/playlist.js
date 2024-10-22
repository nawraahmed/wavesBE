const Playlist = require('../models/Playlist'); // Adjust the path as needed

// Create a new playlist
const createPlaylist = async (req, res) => {
  try {
    const { name, thumbnail, visibility, description } = req.body; // Destructure fields from the request body
    const newPlaylist = await Playlist.create({ 
      name, 
      thumbnail, 
      visibility, 
      description 
    }); // Create a new playlist
    res.status(201).json(newPlaylist); // Respond with the newly created playlist
  } catch (error) {
    res.status(500).json({ message: 'Error creating playlist', error }); // Handle errors
  }
};

// Get all playlists
const getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find(); // Fetch all playlists
    res.status(200).json(playlists); // Respond with playlists
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlists', error });
  }
};

// Get a playlist by ID
const getPlaylistById = async (req, res) => {
  try {
    const { id } = req.params; // Get the playlist ID from the request parameters
    const playlist = await Playlist.findById(id); // Find the playlist by ID
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' }); // Handle not found
    }
    res.status(200).json(playlist); // Respond with the found playlist
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlist', error });
  }
};

// Update a playlist
const updatePlaylist = async (req, res) => {
  try {
    const { id } = req.params; // Get the playlist ID from the request parameters
    const updatedPlaylist = await Playlist.findByIdAndUpdate(id, req.body, { new: true }); // Update the playlist
    if (!updatedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(updatedPlaylist); // Respond with the updated playlist
  } catch (error) {
    res.status(500).json({ message: 'Error updating playlist', error });
  }
};

// Delete a playlist
const deletePlaylist = async (req, res) => {
  try {
    const { id } = req.params; // Get the playlist ID from the request parameters
    const deletedPlaylist = await Playlist.findByIdAndDelete(id); // Delete the playlist
    if (!deletedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(204).json(); // Respond with no content on successful deletion
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
