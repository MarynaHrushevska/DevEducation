const fileUpload = async (req, res, s3) => {
  const myFile = req.file.originalname.split('.');
  const fileType = myFile[myFile.length - 1];
  try {
    const params = {
      Key: `${new Date().getTime()}.${fileType}`,
      Body: req.file.buffer
    }
    const result = await s3.upload(params).promise()
    return res.status(200).json({ message: result.Location });
  } catch (e) {
    res.status(400).json({ message: 'server error' })
  }
}

module.exports = fileUpload