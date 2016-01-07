const http = require('http')
const routes = require('patterns')()

routes.add('GET /', (req, res) => {
  res.end('cool')
})

const server = http.createServer((req, res) => {
  const m = routes.match(req.method + ' ' + req.url)
  if (!m) {
    return
  }
  m.value(req, res)
})

server.listen(9090, () => {
  console.log('server is listening on http://127.0.0.01:9090')
})
