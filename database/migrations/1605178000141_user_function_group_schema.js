'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserFunctionGroupSchema extends Schema {
  up () {
    this.create('USER_FUNCTION_GROUPS', (table) => {
      table.string('GROUP_ID',20)
      table.string('TITLE_LA',50)
      table.string('TITLE_EN',50)
      table.timestamps()
    })
  }

  down () {
    this.drop('USER_FUNCTION_GROUPS')
  }
}

module.exports = UserFunctionGroupSchema
