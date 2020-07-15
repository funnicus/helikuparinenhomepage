const util = require("util");
const multer = require("multer");
const config = require('./config')
const GridFsStorage = require("multer-gridfs-storage");

  const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')
    console.log('==0000000000000000000=====')
    console.log(authorization)
    console.log('==0000000000000000000=====')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {    
      request.token = authorization.substring(7)
    }
    next()
  }


const storage = new GridFsStorage({
  url: config.MONGODB_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-helikuparinen-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-helikuparinen-${file.originalname}`
    };
  }
});

const uploadFile = multer({ storage: storage }).single("file");
const uploadFilesMiddleware = util.promisify(uploadFile);

module.exports = { tokenExtractor, uploadFilesMiddleware }