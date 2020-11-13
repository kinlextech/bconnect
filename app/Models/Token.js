'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Token extends Model {
    static get table(){
        return 'USER_ACCESS_LOG'
    }
    static get primaryKey(){
        return 'rec_no'
    }


    static boot() {
        super.boot()
        this.addHook('afterCreate', async (logInstance) => {
        //   if (userInstance.dirty.US_PASSWORD) {
        //     userInstance.US_PASSWORD = await Hash.make(userInstance.US_PASSWORD)
        //   }
        console.log(logInstance)
        })
      }
}

module.exports = Token
