const fs = require('fs')

console.log(__dirname)

const fileData = fs.readFile(`${__dirname}/input.txt`, 'utf8', function (err, data) {
  console.log('err', err)
  console.log('data', data)
})

console.log('fileData', fileData)
