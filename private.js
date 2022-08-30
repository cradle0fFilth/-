var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
var util = require('ethereumjs-util');
//var tx = require('ethereumjs/tx');

//let privateKey = util.toBuffer("0xc0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0de");
let privateKey = util.toBuffer("0x1111111111111111111111111111111111111111111111111111111111111111");
//var publicKey = util.bufferToHex(util.privateToPublic(privateKey));
var publicKey = util.privateToPublic(privateKey);
var address = '0x' + util.bufferToHex(util.keccak256(publicKey)).slice(26);

console.log(address);