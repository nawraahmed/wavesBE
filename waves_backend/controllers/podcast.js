const axios = require('axios')

const searchPodcasts = async (req, res) => {
  try {
    const { query } = req.query
    const response = await axios.get(
      `https://listen-api.listennotes.com/api/v2/search`,
      {
        params: { q: query },
        headers: {
          'X-ListenAPI-Key': process.env.LISTEN_NOTES_API_KEY
        }
      }
    )

    res.json(response.data.results)
  } catch (err) {
    res.status(500).send('Error fetching podcasts')
  }
}

module.export = { searchPodcasts }
