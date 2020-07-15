const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const collectionSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  paintings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Painting'
    }
  ],
})

collectionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

collectionSchema.plugin(uniqueValidator)

const PaintingCollection = mongoose.model('PaintingCollection', collectionSchema)

module.exports = PaintingCollection