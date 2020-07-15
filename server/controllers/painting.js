const paintingRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const middleware = require('../utils/middleware')
const Painting = require('../models/painting')
const PaintingCollection = require('../models/collection')

paintingRouter.use(middleware.tokenExtractor)

paintingRouter.get('/', async (request, response) => {
    const paintings = await Painting
      .find({})
      .populate('collection')
    response.json(paintings.map(p => p.toJSON()))
})

paintingRouter.post('/', async (request, response) => {
  const body = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)  
  if (!request.token || !decodedToken.id) {    
    return response.status(401).json({ error: 'token missing or invalid' })  
  }

  if(!body.name || !body.desc || !body.img || !body.collectionId){
    return response.status(400).json({ 
      error: 'Name or painting missing...' 
    })
  }

  const paintingCollection = await PaintingCollection.findById(body.collectionId)

  const painting = new Painting({
      name: body.name,
      description: body.desc,
      img: body.img,
      paintingCollection: paintingCollection._id
  })

  const savedPainting = await painting.save()
  paintingCollection.paintings = paintingCollection.paintings.concat(savedPainting._id)
  await paintingCollection.save()

  response.json(savedPainting.toJSON())

})

module.exports = paintingRouter