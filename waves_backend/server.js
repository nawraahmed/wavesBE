//Load Dep
const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const cors = require('cors')

//require and initalize dotenv
require('dotenv').config()

//PORT conf
const PORT = process.env.PORT

//Initalize express
const app = express()

app.use(cors())
app.use(express.json())

//Database Configuration
const db = require('./config/db')

//listen on port
app.listen(PORT, () => console.log(`Running on port: ${PORT}`))

//import routes
const authRouter = require('./routes/auth')
const podcastRouter = require('./routes/podcast')
const favoriteRouter = require('./routes/favorite')
const statsRouter = require('./routes/stats')
const ProfileRouter = require('./routes/Profile')

//mount routes
app.use('/auth', authRouter)
app.use('/', podcastRouter)
app.use('/profile', ProfileRouter)
app.use('/', favoriteRouter)
app.use('/', statsRouter)
