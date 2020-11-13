'use strict'

class userLoginvalidate {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = userLoginvalidate
