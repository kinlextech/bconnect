'use strict'

const Env = use('Env')
const Axios = require('axios')
class WaterController {

    async detail({params,response}){
        const ret = await Axios.get(Env.get('API_URL_BWTP')+'/clients/detail/'+params.id,{
            headers: {
                'Auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDErcnVVeER5Y01lbUJ2bmgvYWNJRi9JQWN6UGNjNGpvQWwvVmZmY1hpaXUyZzdjWU1UeThDb3ZjRlVhcSs4cUJFZ0Z2ZFp5NCs0NXBNZWhFK1pnTEo3RVRHQklWcFExenYwQ3AvU2tXeDQ2WUMwWDJ1VjVrWnNWeVMvSmtQeVdGaFdLZVpGR0w0U0R4UT09IiwiaWF0IjoxNjA1NTk2ODQ4LCJleHAiOjE2MDU2ODMyNDh9.iNha3ZnpniBIRIFv6arac7T_cjHR6--HKOlhR8s4Nv4'
              }
        }).then((res)=> {
            return response.json(res.data)
        })
    }
}

module.exports = WaterController
