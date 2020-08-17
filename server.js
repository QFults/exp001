const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

  switch (req.url) {
    case '/movies':
      fs.readFile('movies.html', 'utf8', (err, html) => {
        if (err) { console.log(err) }
        res.end(html)
      })
      break
    case '/songs':
      fs.readFile('songs.html', 'utf8', (err, html) => {
        if (err) { console.log(err) }
        res.end(html)
      })
      break
    case '/food':
      fs.readFile('food.html', 'utf8', (err, html) => {
        if (err) { console.log(err) }
        res.end(html)
      })
      break
    case '/games':
      fs.readFile('games.html', 'utf8', (err, html) => {
        if (err) { console.log(err) }
        res.end(html)
      })
      break
  }

  // fs.readFile('index.html', 'utf8', (err, html) => {
  //   if (err) { console.log(err) }
  //   res.end(html)
  // })

  // res.end('Hello World!')

  // let [, op, a, b] = req.url.split('/')

  // a = parseInt(a)
  // b = parseInt(b)

  // switch (op) {
  //   case 'add':
  //     res.end(`${a + b}`)
  //     break
  //   case 'subtract':
  //     res.end(`${a - b}`)
  //     break
  //   case 'multiply':
  //     res.end(`${a * b}`)
  //     break
  //   case 'divide':
  //     res.end(`${a / b}`)
  //     break
  // }
})

server.listen(3000)
