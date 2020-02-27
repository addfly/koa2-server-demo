// const crypto = require('crypto');
// const key = require('./key/')
// // 加密方法
// exports.encrypt = (data) => {
//     return crypto.publicEncrypt(key.pubKey, Buffer.from(data))
// }
// exports.decrypt = (encrypted) => {
//     return crypto.privateDecrypt(key.privKey,encrypted)
// }

const cryptoJS=require('crypto-js');
exports.encrypt=(data,salt)=>{
    return cryptoJS.SHA512(cryptoJS.SHA512(data)+salt).toString()
}





