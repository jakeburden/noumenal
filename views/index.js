const h = require('virtual-dom/h')

module.exports = () => {
  return h('main', [
    h('h1', ['Welcome!']),
    h('h3', ['You don\'nt have any content!']),
    h('p', ['Go to ' + h('a', {href: '/app'}, ['/app']) + ' to publish some content.'])
  ])
}
