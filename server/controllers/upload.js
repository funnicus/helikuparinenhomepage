const uploadRouter = require('express').Router()
const middleware = require("../utils/middleware");

uploadRouter.post('/', async (req, res) => {
  try {
    const imagefile = await middleware.uploadFilesMiddleware(req, res);
    console.log(imagefile)

    console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    return res.send(`File has been uploaded.`);
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`);
  }
})

module.exports = uploadRouter
