const uploadRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const middleware = require("../utils/middleware")
const config = require('../utils/config')
const mongoose = require('mongoose')
const Grid = require('gridfs-stream')
const Painting = require('../models/painting')

uploadRouter.use(middleware.tokenExtractor)

// En tiedä onko tämä hyvä ratkaisu kuvien löytämiseen, mutta se ainakin toimii :D
const conn = mongoose.createConnection(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
let gfs
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo)
  gfs.collection('photos')
})

uploadRouter.get('/images', async (req, res) => {
  try{
    gfs.files.find().toArray((err, files) => {
      if(!files || files.length === 0){
        return res.status(404).json({
          err: 'No files exist'
        })
      }

      return res.json(files)
    })
  }
  catch(err){
    console.log(err)
    res.send(err)
  }
})

uploadRouter.get('/images/:filename', async (req, res) => {
  try{
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      if(!file || file.length === 0){
        return res.status(404).json({
          err: 'No files exist'
        })
      }

      if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
        const readstream = gfs.createReadStream(file.filename)
        readstream.pipe(res)
      }
      else {
        res.status(404).json({
          err: 'Not an image'
        })
      }
    })
  }
  catch(err){
    console.log("Bro moment")
    console.log(err)
    res.send(err)
  }
})
// =======================================================================================

uploadRouter.post('/', async (req, res) => {

  const decodedToken = jwt.verify(req.token, process.env.SECRET)  
  if (!req.token || !decodedToken.id) {    
    return response.status(401).json({ error: 'token missing or invalid' })  
  }

  try {
    await middleware.uploadFilesMiddleware(req, res)
    console.log(req.file)
    if (req.file == undefined) {
      return res.send(`You must select a file.`)
    }

    return res.send(req.file.filename)
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`)
  }
})

uploadRouter.delete('/images/:filename', async (req, res) => {

  console.log(req.token)

    const decodedToken = jwt.verify(req.token, process.env.SECRET)  
    if (!req.token || !decodedToken.id) {    
      return response.status(401).json({ error: 'token missing or invalid' })  
    }

    try {
      gfs.remove({ filename: req.params.filename, root: 'photos' }, (err, gridStore) => {
        if(err){
          return res.status(404).json({ error: err })
        }
        res.redirect('/')
      })
      await Painting.findOneAndDelete({ img: req.params.filename })
    }
    catch(err){
      console.error(err)
      res.status(500).error({ error: err })
    }
})

module.exports = uploadRouter