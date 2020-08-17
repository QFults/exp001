const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url.split('/'))

})

server.listen(3000)
