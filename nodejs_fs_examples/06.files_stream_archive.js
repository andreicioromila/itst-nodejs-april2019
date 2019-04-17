const fs = require('fs')
const zip = require('zlib')

const readStream = fs.createReadStream('input.txt', {
  highWaterMark: 1
})
const writeStream = fs.createWriteStream('archive.gz')
const archviverStream = zip.Gzip()

readStream.pipe(archviverStream).pipe(writeStream)