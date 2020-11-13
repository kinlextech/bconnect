'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRoleSchema extends Schema {
  up() {
    this.create('USER_ROLE', (table) => {
      table.string('ROLE_ID', 80)
      table.string('DESCRIPTION', 100)
      table.string('MAKER_ID', 80)
      table.date('MAKER_DT')
      table.timestamps()
    })
  }

  down() {
    this.drop('USER_ROLE')
  }
}

module.exports = UserRoleSchema
