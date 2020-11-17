'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRoleMapingSchema extends Schema {
  up () {
    this.create('USER_ROLE_MAPPING', (table) => {
      table.string('USER_ID',80)
      table.string('ROLE_ID',100)
      table.string('MAKER_ID',80)
      table.date('MAKER_DT')
      table.timestamps()
    })
  }

  down () {
    this.drop('USER_ROLE_MAPPING')
  }
}

module.exports = UserRoleMapingSchema
