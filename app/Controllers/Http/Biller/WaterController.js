'use strict'

const Env = use('Env')
const Axios = require('axios')
class WaterController {

    async detail({rquest,response}){
        const ret = await Axios.get(Env.get('API_URL_BWTP')+'/clients/detail/',{
            headers: {
                'Auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDErbFlDSFR5YmwwTWlhNEs3dllUSkU0bjMwdk51cXBzcVVMSTY3SXZyNFl6S1FpbXhXTCtqZE92MnlMK2JyT3dLZEYyRG9ETFRZS0Y4bkk1SFhPVzVSdTh1TDVZN0tWRFhDYWNOajVhUS9ldWpaaXgyVnRqaG9rM1l3Y0NDMS9ZSTh4ZXRkSEM1TG9qUT09IiwiaWF0IjoxNjA1NDY5NDE4LCJleHAiOjE2MDU1NTU4MTh9.n70ucPyKpNApGXtRHf0eT0gf-1fasgfAOmr2BaI27SY'
              }
        })

        return response.json(ret)
    }
}

module.exports = WaterController
