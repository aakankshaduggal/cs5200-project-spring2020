const paymentModel=require('../models/payments/payment.model.server')

const createpayment=(payment) =>
    paymentModel.create(payment)

module.exports={
    createpayment
}