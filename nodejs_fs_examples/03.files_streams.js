const fs = require('fs')

const fileStream = fs.createReadStream(`${__dirname}/input.txt`, {
  encoding: 'utf8',
  highWaterMark: 2
})

fileStream.on('data', function (data) {
  console.log(data)
})

fileStream.on('end', function () {
  console.log('Streaming done')
})
