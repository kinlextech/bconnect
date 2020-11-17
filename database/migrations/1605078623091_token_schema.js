'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokenSchema extends Schema {
  up () {
    this.create('USER_ACCESS_LOG', (table) => {
      table.increments('rec_no').unique()
      table.boolean('is_revoked')
      table.string('token',255)
      table.string('type',100)
      table.string('user_id',80)
      table.timestamps()
    })
  }

  down () {
    this.drop('USER_ACCESS_LOG')
  }
}

module.exports = TokenSchema
