const http = require('http')
const routes = require('patterns')()
const st = require('st')
const serve = st({
  path: 'browser/dist'
})

const render = require('./server/render')
const trees = require('./server/trees')

routes.add('GET /', render(trees.site.home))
routes.add('GET /app', render(trees.app.home))
routes.add('GET /content', render(trees.app.content))
routes.add('GET /developer', render(trees.app.developer))

const server = http.createServer((req, res) => {
  const m = routes.match(req.method + ' ' + req.url)
  if (!m) {
    serve(req, res)
    return
  }
  m.value(req, res)
})

server.listen(9090, () => {
  console.log('server is listening on http://127.0.0.01:9090')
})
