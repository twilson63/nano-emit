module.exports = function () {
  const listeners = []
  const MAX = 10

  const emit = data => listeners.map(fn => fn(data))

  const subscribe = fn => {
    if (listeners.length === MAX) {
      throw new Error('max listeners')
    }

    listeners.push(fn)
  }

  const unsubscribe = function (fn) {
    listeners.splice(listeners.indexOf(fn), 1)
  }

  return {
    emit,
    subscribe,
    unsubscribe
  }

}
