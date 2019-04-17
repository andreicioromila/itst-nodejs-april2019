const fs = require('fs')

const readStream = fs.createReadStream('input.txt', {
  highWaterMark: 1
})
const writeStream = fs.createWriteStream('output.txt')

let i = 0

// readStream.on('data', data => {
//   console.log(i, data)
//   i++
//   writeStream.write(data)
// })
//
// readStream.on('end', () => {
//   console.log('stream ended')
//   writeStream.end()
// })

readStream.pipe(writeStream)

writeStream.on('end', () => {
  writeStream.write('x')
})