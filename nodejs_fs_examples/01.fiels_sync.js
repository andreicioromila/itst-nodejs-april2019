const fs = require('fs')

console.log(__dirname, __filename)

const fileData = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

console.log(fileData)
