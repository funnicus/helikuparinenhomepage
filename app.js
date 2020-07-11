const config = require('./server/utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const paintingsRouter = require('./server/controllers/paintings')
const emailRouter = require('./server/controllers/email')
const mongoose = require('mongoose')

//console.log('connecting to', config.MONGODB_URI)

//const mongoUrl = config.MONGODB_URI

//mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json())

app.use(express.static('./build'))

app.use('/api/paintings', paintingsRouter)
app.use('/api/email', emailRouter)

module.exports = app