'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserLimitSchema extends Schema {
  up () {
    this.create('USER_LIMIT', (table) => {
      table.string('USER_ID',80)
      table.string('LIMIT_TYPE',50)
      table.string('USER_LOCAL_CCY',3)
      table.integer('USER_LIM_AMT',15)
      table.integer('MAKER_ID',80)
      table.date('MAKER_DT')
      table.timestamps()
    })
  }

  down () {
    this.drop('USER_LIMIT')
  }
}

module.exports = UserLimitSchema
