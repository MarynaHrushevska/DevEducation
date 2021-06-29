const express = require('express')
const multer = require('multer')

const imageUpload = require('./helpers/imageUpload')
const fileUpload = require('./helpers/fileUpload')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  next()
})

const PORT = 5000;
const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, '')
  }
})
const upload = multer({ storage }).single('image')

app.post('/', upload, async (req, res) => {
  try {
    const mimeType = req.file.mimetype.split('/')[0];
    if (mimeType !== 'image') {
      return fileUpload(req, res, s3)
    }

    const allLinks = {
      small: await imageUpload(req, 500, 'small', s3),
      medium: await imageUpload(req, 1024, 'medium', s3),
      large: await imageUpload(req, 2048, 'large', s3)
    }
    return res.status(200).json(allLinks);
  }
  catch (e) {
    console.log(e)
    res.status(400).json({ message: e });
  }
})

app.listen(
  PORT,
  () => console.log(`Server have been started on port ${PORT} `)
)
