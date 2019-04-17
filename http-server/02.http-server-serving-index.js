const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  console.log('Am primit un request')

  // fs.readFile('index.html', 'utf8', (err, data) => {
  //   response.writeHead(200, {'Content-Type': 'text/html'})
  //   response.write(data)
  //   response.end()
  // })

  fs.createReadStream('index.html', ).pipe(response)

  // htmlStream.on('data', data => {
  //   response.write(data)
  // })
  //
  // htmlStream.on('end', () => {
  //   response.end()
  // })

  // htmlStream.pipe(response)
}).listen(8080)
