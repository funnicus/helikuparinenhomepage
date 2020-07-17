const paintingsRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const middleware = require('../utils/middleware')
const PaintingCollection = require('../models/collection')

paintingsRouter.use(middleware.tokenExtractor)

paintingsRouter.get('/', async (request, response) => {
  const collections = await PaintingCollection
    .find({})
    .populate('paintings', { name: 1, description: 1, img: 1, id: 1 })
  response.json(collections.map(c => c.toJSON()))
})

paintingsRouter.get('/:id', async (request, response) => {
  const collection = await PaintingCollection.findById(request.params.id)
  response.json(collection.toJSON())
})

paintingsRouter.post('/', async (request, response) => {
  const body = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)  
  if (!request.token || !decodedToken.id) {    
    return response.status(401).json({ error: 'token missing or invalid' })  
  }

  if(!body.name){
    return response.status(400).json({ 
      error: 'Name or painting missing...' 
    })
  }

  const collection = new PaintingCollection({
    name: body.name
  })

  const savedCollection = await collection.save()

  response.json(savedCollection.toJSON())

})

module.exports = paintingsRouter