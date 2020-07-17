const config = require('./server/utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const paintingsRouter = require('./server/controllers/paintings')
const paintingRouter = require('./server/controllers/painting')
const emailRouter = require('./server/controllers/email')
const loginRouter = require('./server/controllers/login')
const uploadRouter = require('./server/controllers/upload')
const userRouter = require('./user')
const mongoose = require('mongoose')

console.log('connecting to', config.MONGODB_URI)

const mongoUrl = config.MONGODB_URI

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json())

const reactApp = express.static('./build')
app.use(reactApp)

app.use('/api/paintings', paintingsRouter)
app.use('/api/painting', paintingRouter)
app.use('/api/email', emailRouter)
app.use('/api/login', loginRouter)
app.use('/api/user', userRouter)
app.use('/api/upload', uploadRouter)

//Toimiva, mutta ei välttämättä hyvä ratkaisu urliin itse kiroitetuille routeille
app.use('*', reactApp)

module.exports = app