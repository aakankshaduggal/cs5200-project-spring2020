const mongoose=require('mongoose')

const paymentSchema=require('./payment.schema.server')

const paymentModel=mongoose.model('PaymentModel', paymentSchema)

module.exports=paymentModel