module.exports = function (method, settings, callback = () => {}) {
  const { access_token = this.token } = settings

  // TODO: DEBUG
  //console.log(JSON.stringify(settings))
  const code = `API.${method}(${JSON.stringify(settings)})`

  const otherTokenItems = this.methods.filter(item => item.access_token !== access_token)
  const currentTokenItems = this.methods.find(item => item.access_token === access_token)

  this.methods = [
    ...otherTokenItems,
    {
      access_token,
      items: [
        ...(currentTokenItems ? currentTokenItems.items : []),
        { code, callback }
      ]
    }
  ]

  return this
}
