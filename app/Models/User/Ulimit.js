'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ulimit extends Model {
    static get table(){
        return 'USER_LIMIT'
    }
    static get primaryKey(){
        return 'USER_ID'
    }
}

module.exports = Ulimit
