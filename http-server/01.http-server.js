const http = require('http')

http.createServer((request, response) => {
  console.log('Am primit un request')
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write('<h1>Test</h1>')
  response.end()
}).listen(8080)
