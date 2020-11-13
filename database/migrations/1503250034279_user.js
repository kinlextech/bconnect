'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('USERS', (table) => {
      table.string('USER_ID', 80).notNullable().unique()
      table.string('USER_NAME', 50).notNullable().unique()
      table.string('US_PASSWORD', 255)
      table.string('USER_STAFF_ID', 5)
      table.string('LAST_LOGIN_IP', 20)
      table.string('LAST_LOGIN_DT', 20)
      table.string('USER_DEPT', 10)
      table.string('USER_BRANCH', 5)
      table.string('MOBILE', 20)
      table.string('EMAIL_ADDR', 200)
      table.string('MAMKER_ID', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('USERS')
  }
}

module.exports = UserSchema
