const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const paintingsRouter = require('./controllers/paintings')
const emailRouter = require('./controllers/email')
const mongoose = require('mongoose')

//console.log('connecting to', config.MONGODB_URI)

//const mongoUrl = config.MONGODB_URI

//mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json())

app.use(express.static('./client/build'))

app.use('/api/paintings', paintingsRouter)
app.use('/api/email', emailRouter)

module.exports = app