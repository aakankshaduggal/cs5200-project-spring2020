const mongoose=require('mongoose');

const paymentSchema=mongoose.Schema({
    _id:Number,
    mode_of_payment: { type: String, enum:['CASH','CREDIT','DEBIT','PAYPAL']}
},{collection:'payments'});

module.exports=paymentSchema;