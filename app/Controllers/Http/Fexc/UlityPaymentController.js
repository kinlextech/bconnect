'use strict'

const Axios = use('axios')
const Env = use('Env')
class UlityPaymentController {

    async payment({request,response}){
        const {account,payments,product,type} = request.all()
        const https = require('https');
        const strqry = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
        <soap:Body>\
        <ns1:CREATEUPTRANSACTION_FSFS_REQ xmlns:ns1="http://fcubs.ofss.com/service/FCUBSUPService">\
        <ns1:FCUBS_HEADER>\
        <ns1:SOURCE>GWDEXSYS</ns1:SOURCE>\
        <ns1:UBSCOMP>FCUBS</ns1:UBSCOMP>\
        <ns1:USERID>GWSYSTEM02</ns1:USERID>\
        <ns1:ENTITY>ENTITY_ID1</ns1:ENTITY>\
        <ns1:BRANCH>001</ns1:BRANCH>\
        <ns1:SERVICE>FCUBSUPService</ns1:SERVICE>\
        <ns1:OPERATION>CreateUPTransaction</ns1:OPERATION>\
        </ns1:FCUBS_HEADER>\
        <ns1:FCUBS_BODY>\
        <ns1:Transaction-Details>\
        <ns1:XREF>84545454864</ns1:XREF>\
        <ns1:PRD>${product.code}</ns1:PRD>\
        <ns1:INSTID>${product.instid}</ns1:INSTID>\
        <ns1:BILLNO>${payments.billno}</ns1:BILLNO>\
        <ns1:BILLDT>2020-03-02</ns1:BILLDT>\
        <ns1:BAMT>${payments.bill_amt}</ns1:BAMT>\
        <ns1:BCCY>${payments.ccy}</ns1:BCCY>\
        <ns1:CUSTACNO>${account.accno}</ns1:CUSTACNO>\
        <ns1:ACCCY>${account.ccy}</ns1:ACCCY>\
        <ns1:CONSNO>121313</ns1:CONSNO>\
        <ns1:TXNCCY>LAK</ns1:TXNCCY>\
        <ns1:TXNDATE>2020-03-02</ns1:TXNDATE>\
        <ns1:TXNBRN></ns1:TXNBRN>\
        <ns1:CUSTBRN>001</ns1:CUSTBRN>\
        <ns1:CHCKDT></ns1:CHCKDT>\
        </ns1:Transaction-Details>\
        </ns1:FCUBS_BODY>\
        </ns1:CREATEUPTRANSACTION_FSFS_REQ>\
        </soap:Body>\
        </soap:Envelope>`
    //   const res = await Axios.post(Env.get('API_URL_FEXC')+'FCUBSUPService/FCUBSUPService',strqry,
    //     {
    //         headers:
    //             { 'Content-Type': 'text/xml' },
    //         httpsAgent: new https.Agent({ rejectUnauthorized: false })
    //     })
    console.log(strqry)
    }
}

module.exports = UlityPaymentController
