module.exports = function (peer, keyboard, callback) {
  this.execute('messages.send', {
    peer_id: peer,
    random_id: Number(`${Math.floor(Math.random() * 1e4)}${Date.now()}`),
    keyboard: keyboard,
  }, callback)

  return this
}
