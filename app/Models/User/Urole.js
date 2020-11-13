'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Urole extends Model {
    static get table(){
        return 'USER_ROLE'
    }
    static get primaryKey(){
        return 'ROLE_ID'
    }
}

module.exports = Urole
