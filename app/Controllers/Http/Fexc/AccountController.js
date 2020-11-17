'use strict'
const BRANCH = use('App/Models/ORD/Branch')
const Axios = use('axios')
const Env = use('Env')
const xml2js = require('xml2js');
class AccountController {
    async detail({params,response}){
        const https = require('https');
        const branch = await BRANCH.query().where('BRANCH_COD',params.accno.substr(0,3).trim(' ')).orWhere('OLD_CODE',params.accno.substr(0,3).trim(' ')).fetch()
        const strqr = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:fcub="http://fcubs.ofss.com/service/FCUBSAccService">\
                        <soapenv:Header/>\
                        <soapenv:Body>\
                        <fcub:QUERYACCBAL_IOFS_REQ>\
                            <fcub:FCUBS_HEADER>\
                                <fcub:SOURCE>GWDEXSYS</fcub:SOURCE>\
                                <fcub:UBSCOMP>FCUBS</fcub:UBSCOMP>\
                                <fcub:USERID>GWSYSTEM01</fcub:USERID>\
                                <fcub:BRANCH>001</fcub:BRANCH>\
                                <fcub:SERVICE>FCUBSAccService</fcub:SERVICE>\
                                <fcub:OPERATION>QueryAccBal</fcub:OPERATION>\
                                <fcub:SOURCE_OPERATION>QueryAccBal</fcub:SOURCE_OPERATION>\
                                <fcub:MSGSTAT>SUCCESS</fcub:MSGSTAT>\
                                <fcub:ADDL>\
                                    <fcub:PARAM>\
                                    <fcub:NAME/>\
                                    <fcub:VALUE/>\
                                    </fcub:PARAM>\
                                </fcub:ADDL>\
                            </fcub:FCUBS_HEADER>\
                            <fcub:FCUBS_BODY>\
                                <fcub:ACC-Balance>\
                                    <fcub:ACC_BAL>\
                                    <fcub:BRANCH_CODE>${branch.rows[0].BRANCH_COD}</fcub:BRANCH_CODE>\
                                    <fcub:CUST_AC_NO>${params.accno.trim(' ')}</fcub:CUST_AC_NO>\
                                    </fcub:ACC_BAL>\
                                </fcub:ACC-Balance>\
                            </fcub:FCUBS_BODY>\
                        </fcub:QUERYACCBAL_IOFS_REQ>\
                        </soapenv:Body>\
                    </soapenv:Envelope>`

        const res = await Axios.post(Env.get('API_URL_FEXC')+'FCUBSAccService/FCUBSAccService',strqr,
                    {
                        headers:
                            { 'Content-Type': 'text/xml' },
                        httpsAgent: new https.Agent({ rejectUnauthorized: false })
                    }).then(res => {
                        xml2js.parseString(res.data, function (err, result) {
                            let dt = JSON.parse(JSON.stringify(result))
                            // console.log(dt['S:Envelope']['S:Body'][0]["QUERYACCBAL_IOFS_RES"])
                            return response.json(dt['S:Envelope']['S:Body'][0]["QUERYACCBAL_IOFS_RES"][0]['FCUBS_BODY'][0]['ACC-Balance'][0])
                        });
                    }).catch(err => { console.log(err) });
        return response
    }
}

module.exports = AccountController
