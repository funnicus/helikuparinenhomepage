const config = require('./server/utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const paintingsRouter = require('./server/controllers/paintings')
const paintingRouter = require('./server/controllers/painting')
const emailRouter = require('./server/controllers/email')
const loginRouter = require('./server/controllers/login')
const uploadRouter = require('./server/controllers/upload')

//User routea varten...
//const userRouter = require('./server/controllers/user')


const mongoose = require('mongoose')

const mongoUrl = config.MONGODB_URI

console.log('connecting to', mongoUrl)
try {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})
} catch (error) {
    console.error(error)
}

app.use(cors())
app.use(express.json())

const reactApp = express.static('./build')
app.use(reactApp)

app.use('/api/paintings', paintingsRouter)
app.use('/api/painting', paintingRouter)
app.use('/api/email', emailRouter)
app.use('/api/login', loginRouter)
app.use('/api/upload', uploadRouter)
//User routea käytetään vain, jos halutaan luoda uusi admin käyttäjä...
//app.use('/api/user', userRouter)

//Toimiva, mutta ei välttämättä hyvä ratkaisu urliin itse kirjoitetuille routeille
app.use('*', reactApp)

module.exports = app