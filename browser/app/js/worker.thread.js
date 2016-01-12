module.exports = self => {
  const state = {}

  self.onmessage = ({data}) => {
    const { type, payload } = data

    const events = {
      start () {
        state.url = payload.url
      },
      setUrl () {
        state.url = payload
      }
    }

    events[type]()
    self.postMessage(state)
  }
}
