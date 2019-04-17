const fs = require('fs')

const message = 'Mesaj foarte fain'

const writeStream = fs.createWriteStream('output.txt')

writeStream.write(message)
writeStream.write('Buna ziua!')
writeStream.end()