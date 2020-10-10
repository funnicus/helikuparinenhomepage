require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

const EMAILUSER = process.env.EMAILUSER
const EMAILRECEIVER = process.env.EMAILRECEIVER
const EMAILPASS = process.env.EMAILPASS

if(process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development'){
  MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
  MONGODB_URI,
  PORT,
  EMAILUSER,
  EMAILPASS
}