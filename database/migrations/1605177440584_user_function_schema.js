'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserFunctionSchema extends Schema {
  up () {
    this.create('USER_FUNCTIONS', (table) => {
      table.string('FUNC_ID',20).unique()
      table.string('IS_TYPE',3)
      table.string('ICON_TYPE',5)
      table.string('TITLE_LA')
      table.string('TITLE_EN')
      table.string('ICON_STR',100)
      table.string('MAKER_ID',80)
      table.string('CANNEL_ID',100)
      table.string('UPDATE_ID',80)
      table.string('REC_STAT',1)
      table.timestamps()
    })
  }

  down () {
    this.drop('USER_FUNCTIONS')
  }
}

module.exports = UserFunctionSchema
