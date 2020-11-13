'use strict'

class userRegister {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required',
      staffid: 'required',
      password: 'required',
      department: 'required',
      branch: 'required',
      email: 'required|email'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = userRegister
