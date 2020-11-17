'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserGroupMappingSchema extends Schema {
  up () {
    this.create('USER_GROUP_MAPING', (table) => {
      table.string('GROUP_ID',20)
      table.string('FUNC_ID',20)
      table.timestamps()
    })
  }

  down () {
    this.drop('USER_GROUP_MAPING')
  }
}

module.exports = UserGroupMappingSchema
