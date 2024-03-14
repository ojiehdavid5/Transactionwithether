require('dotenv').config()
const web3=require('web3');

var contract;

$(document).ready(function(){
    web3= new Web3(web3.currentProvider);

var address=process.env.ADDRESS;
console.log(address);
    contract=new web3.eth.Contract();
});