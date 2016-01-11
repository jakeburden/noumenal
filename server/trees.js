const app = require('../views/app/index.js')()

module.exports = {
  home: app({
    url: '/'
  }),
  content: app({
    url: '/content'
  }),
  developer: app({
    url: '/developer'
  })
}
