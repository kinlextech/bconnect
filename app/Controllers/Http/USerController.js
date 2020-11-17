'use strict'
const Hash = use('Hash');

const Logger = use('Logger')
const LoggerDaily = use('App/Middleware/LoggerDaily')

const Encryption = use('Encryption');
const { validate } = use('Validator')
const Token = use('App/Models/Token')
const USERMAST = use('App/Models/User')

const Database = use('Database')

class USerController {

    /*
        Create Or Registra New User
    */
    async login({ request, auth, response }) {

        const { username, password } = request.all()
        var USER_NAME = username
        var US_PASSWORD = password
        try {
            /// check user logined
            // const tkres = await Token.getMax('created_at')
            // const tkres = await Token.query().where('user_id',USER_NAME).where('is_revoked',0).fetch()
            // if(tkres.rows != ''){
            //     return response.json({status:'00',message:'USER_AREADY_LOGIN',SSID:tkres.rows[0]['token']})
            // }else{
                // }
                    return await auth.withRefreshToken().attempt(USER_NAME, US_PASSWORD);
            } catch (e) {
            return response.json(e)
        }
    }
    async uprofile({ request, auth, response }){
        const { username } = request.all()
        const rst = await USERMAST.findByOrFail('user_id','laithong')
        return response.json({profile:rst})
    }

    async logout({ request, response, auth }) {
        try {
            const check = await auth.check()
            if (check) {
                const aa = await auth.user.tokens().where('type', 'jwt_refresh_token').update({ is_revoked: true })

                return response.json(aa)
            }
        } catch (e) {
            // return response.json(check)
            console.log(e)
        }
    }


    /*
        Create Or Registra New User
    */
    async register({ request, response }) {

        const { username, staffid, password, department, branch, mobile, email } = request.all()
        Logger.info(request.ip(), request.url(), request.all())
        const DLOG = new LoggerDaily
        const mess = []
        DLOG.handle({
            in: [
                {
                    IP: request.ip(),
                    datetime: Date.now()
                },
                request.all()
            ],
            do: [

            ],
            out: [

            ]
        })
        try {
            const res = await USERMAST.create({
                USER_ID: username,
                USER_NAME: username,
                US_PASSWORD: password,
                USER_STAFF_ID: staffid,
                USER_DEPT: department,
                USER_BRANCH: branch,
                MOBILE: mobile,
                EMAIL_ADDR: email
            })

            return response.json(res)
        } catch (e) {
            return response.json(e)
        }


    }

}

module.exports = USerController
