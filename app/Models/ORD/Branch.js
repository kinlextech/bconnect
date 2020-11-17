'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Branch extends Model {
    static get table(){
        return 'ORD_BRANCHS'
    }
    static get primaryKey(){
        return 'BRANCH_COD'
    }
}

module.exports = Branch
