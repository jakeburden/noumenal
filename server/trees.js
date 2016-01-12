const app = require('../views/app/index.js')()
const site = require('../views/site/index.js')

module.exports = {
  app: {
    home: app({
      url: '/'
    }),
    content: app({
      url: '/content'
    }),
    developer: app({
      url: '/developer'
    })
  },
  site: {
    home: site()
  }
}
