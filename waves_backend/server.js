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
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));




//import routes
const authRouter = require('./routes/auth')
const podcastRouter = require('./routes/podcast')
const favoriteRouter = require('./routes/favorite')
<<<<<<< HEAD
const statsRouter = require('./routes/stats')
=======
const ProfileRouter = require('./routes/Profile')
>>>>>>> c3970ec61ac6fc86958549a47d37f163b665dff0

//mount routes
app.use('/auth', authRouter)
app.use('/', podcastRouter)
app.use('/profile', ProfileRouter);
app.use('/', favoriteRouter)
<<<<<<< HEAD
app.use('/', statsRouter)
=======

>>>>>>> c3970ec61ac6fc86958549a47d37f163b665dff0
