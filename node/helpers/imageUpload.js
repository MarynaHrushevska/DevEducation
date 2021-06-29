const sharp = require('sharp')

const imageUpload = async (req, size, name, s3) => {
  const myFile = req.file.originalname.split('.');
  const fileType = myFile[myFile.length - 1];
  try {
    const size1 = await sharp(req.file.buffer).resize({ width: size, height: size }).toBuffer();
    const paramsSize1 = {
      Key: `${name}-${new Date().getTime()}.${fileType}`,
      Body: size1
    }
    const result = await s3.upload(paramsSize1).promise()
    return result.Location
  }
  catch (e) {
    console.log(e)
  }
}

module.exports = imageUpload