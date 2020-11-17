'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdBranchsSchema extends Schema {
  up () {
    this.create('ORD_BRANCHS', (table) => {
      table.string('BRANCH_COD',3).unique()
      table.string('REGIONAL_OFFICE',3)
      table.string('OLD_CODE',3)
      table.string('STAT',1)
      table.string('MAKER_ID',20)
      table.timestamps()
    })
  }

  down () {
    this.drop('ORD_BRANCHS')
  }
}

module.exports = OrdBranchsSchema
