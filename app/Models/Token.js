'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const User = use('App/Models/User')
class Token extends Model {
    static get table(){
        return 'USER_ACCESS_LOG'
    }
    static get primaryKey(){
        return 'rec_no'
    }


    static boot() {
        super.boot()
        this.addHook('beforeCreate', async (logInstance) => {
            const USER = await User.findByOrFail('user_id',logInstance.dirty.user_id)
            USER.LAST_LOGIN_IP = ''
            await USER.save()
            // const res = await User.query().where('user_id',logInstance.dirty.user_id).fetch()
        // console.log(USER)
        })
      }
}

module.exports = Token
