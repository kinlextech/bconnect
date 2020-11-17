/*
---- reuest address
---- request to partner  -> response
---- transaction -> reposone
---- response to partner
*/
const Logger = use('Logger')

'use strict'

class LoggerDaily {
  async handle (data) {
      console.log(data)
  }
}

module.exports = LoggerDaily
