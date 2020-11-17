'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
<<<<<<< HEAD

=======
const User = use('App/Models/User')
>>>>>>> master
class Token extends Model {
    static get table(){
        return 'USER_ACCESS_LOG'
    }
    static get primaryKey(){
        return 'rec_no'
    }


    static boot() {
        super.boot()
<<<<<<< HEAD
        this.addHook('afterCreate', async (logInstance) => {
        //   if (userInstance.dirty.US_PASSWORD) {
        //     userInstance.US_PASSWORD = await Hash.make(userInstance.US_PASSWORD)
        //   }
        console.log(logInstance)
=======
        this.addHook('beforeCreate', async (logInstance) => {
            const USER = await User.findByOrFail('user_id',logInstance.dirty.user_id)
            USER.LAST_LOGIN_IP = ''
            await USER.save()
            // const res = await User.query().where('user_id',logInstance.dirty.user_id).fetch()
        // console.log(USER)
>>>>>>> master
        })
      }
}

module.exports = Token
