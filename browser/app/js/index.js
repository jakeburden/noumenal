const work = require('webworkify')
const main = require('main-loop')
const catchLinks = require('catch-links')

const worker = work(require('./worker.thread.js'))
const app = require('../../../views/app/index.js')(worker)

const rootElement = document.getElementById('app')

const loop = main({
  url: window.location.pathname
}, app, {
  create: require('virtual-dom/create-element'),
  diff: require('virtual-dom/diff'),
  patch: require('virtual-dom/patch')
})

window.requestAnimationFrame(() => {
  rootElement.replaceChild(loop.target, rootElement.firstChild)
})

worker.onmessage = ({data}) => {
  const { url } = data
  loop.update(data)
  if (window.location.pathname !== url) {
    window.history.pushState(null, null, url)
  }
}

worker.postMessage({
  type: 'start',
  payload: {
    url: window.location.pathname
  }
})

window.addEventListener('popstate', () => {
  worker.postMessage({
    type: 'setUrl',
    payload: window.location.pathname
  })
})

catchLinks(window, pathname => {
  worker.postMessage({
    type: 'setUrl',
    payload: pathname
  })
})
