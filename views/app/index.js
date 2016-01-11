'use strict'

const h = require('virtual-dom/h')
const home = require('./home')
const content = require('./content')
const developer = require('./developer')

module.exports = worker => state => {
  let page
  const url = state.url

  if (url === '/') page = home(worker, state)
  if (url === '/content') page = content(worker, state)
  if (url === '/developer') page = developer(worker, state)

  return h('main', [
    h('h1', ['app!']),
    h('nav', [
      h('a', {
        href: '/'
      }, ['home']),

      h('a', {
        href: '/content'
      }, ['content']),

      h('a', {
        href: '/developer'
      }, ['developer'])
    ]),
    page
  ])
}
