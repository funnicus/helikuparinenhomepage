const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const paintingSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  nameEn: {
    type: String,
    unique: true,
    required: true
  },
  description: {
      type: String,
      require: true
  },
  descriptionEn: {
    type: String,
    require: true
  },
  img: String,
  paintingCollection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaintingCollection'
  },
})

paintingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

paintingSchema.plugin(uniqueValidator)

const Painting = mongoose.model('Painting', paintingSchema)

module.exports = Painting